import { useState, useCallback, useRef, useMemo } from "react";
import { OnlyCurrency } from "@Lib/utils/FilterOnlyValuesCurrency";
import { OnlyInteger } from "@Lib/utils/FilterOnlyValuesInteger";
import { useEstado } from "@Lib/hooks/useEstadosMexico";
import { useMunicipio } from "@Lib/hooks/useMunicipiosMexico";
import { useLocalidad } from "@Lib/hooks/useLocalidadMexico";
import { debounce } from "lodash";

export interface Extra {
  name: string;
  price: number;
}

export function useFormularioServicio(onCloseModal: () => void) {
  // Estados del formulario
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precioBase, setPrecioBase] = useState("$");
  const [cantidad, setCantidad] = useState("");
  const [extras, setExtras] = useState<Extra[]>([]);
  const [extraInput, setExtraInput] = useState("");
  const [extraPrice, setExtraPrice] = useState("$");
  const [imagenes, setImagenes] = useState<File[]>([]);
  const clearFilesRef = useRef<() => void>(() => {});

  // Handlers optimizados con useCallback
  const debouncedHandleNombreChange = useMemo(
    () => debounce((value: string) => setNombre(value), 0.00000000000001),
    []
  );

  const debouncedHandleDescripcionChange = useMemo(
    () => debounce((value: string) => setDescripcion(value), 0.0000000000001),
    []
  );

  const handleTipoChange = useCallback((value: string) => setTipo(value), []);
  const handleCategoriaChange = useCallback(
    (value: string) => setCategoria(value),
    []
  );
  const handleExtraInputChange = useCallback(
    (value: string) => setExtraInput(value),
    []
  );

  // Formateadores de valores numéricos
  const {
    value: precioBaseValue,
    handleChange: handlePrecioBaseChange,
    handleBlur: handlePrecioBaseBlur,
  } = OnlyCurrency(precioBase, setPrecioBase);

  const {
    value: extraPriceValue,
    handleChange: handleExtraPriceChange,
    handleBlur: handleExtraPriceBlur,
  } = OnlyCurrency(extraPrice, setExtraPrice);

  const { value: cantidadValue, handleChange: handleCantidadChange } =
    OnlyInteger(cantidad, setCantidad);

  // Manejo de extras
  const addExtra = useCallback(() => {
    if (
      extraInput.trim() !== "" &&
      !extras.some((e) => e.name === extraInput.trim())
    ) {
      const price =
        Number.parseFloat(extraPriceValue.replace(/[$,]/g, "")) || 0;
      setExtras((prev) => [...prev, { name: extraInput.trim(), price }]);
      setExtraInput("");
      setExtraPrice("$");
    }
  }, [extraInput, extraPriceValue, extras]);

  const removeExtra = useCallback((extraName: string) => {
    setExtras((prev) => prev.filter((e) => e.name !== extraName));
  }, []);

  // Manejo de imágenes
  const handleUpload = useCallback((files: File[]) => {
    setImagenes((prev) => [...prev, ...files]);
  }, []);

  const registerClearFiles = useCallback((clearFn: () => void) => {
    clearFilesRef.current = clearFn;
  }, []);

  const handleRemoveFile = useCallback((index: number) => {
    setImagenes((prev) => {
      const newFiles = [...prev];
      newFiles.splice(index, 1);
      return newFiles;
    });
  }, []);

  // Manejo de ubicación
  const { estados, estadoSeleccionado, setEstadoSeleccionado } = useEstado();
  const municipioHook = useMunicipio(estadoSeleccionado);
  const { municipios, municipioSeleccionado, setMunicipioSeleccionado } =
    municipioHook;

  const localidadHook = useLocalidad(
    estadoSeleccionado || { id: "", nombre: "" },
    municipioSeleccionado || { id: "", nombre: "" }
  );
  const { colonias, coloniaSeleccionada, setColoniaSeleccionada } =
    localidadHook;

  const handleEstadoChange = useCallback(
    (id: string) => {
      const estadoEncontrado = estados.find((est) => est.ESTADO_ID === id);
      if (estadoEncontrado) {
        setEstadoSeleccionado({
          id: estadoEncontrado.ESTADO_ID,
          nombre: estadoEncontrado.ESTADO,
        });
        setMunicipioSeleccionado(null);
        setColoniaSeleccionada(null);
      }
    },
    [
      estados,
      setEstadoSeleccionado,
      setMunicipioSeleccionado,
      setColoniaSeleccionada,
    ]
  );

  const handleMunicipioChange = useCallback(
    (id: string) => {
      const municipioEncontrado = municipios.find(
        (mun) => mun.MUNICIPIO_ID === id
      );
      if (municipioEncontrado) {
        setMunicipioSeleccionado({
          id: municipioEncontrado.MUNICIPIO_ID,
          nombre: municipioEncontrado.MUNICIPIO,
        });
        setColoniaSeleccionada(null);
      }
    },
    [municipios, setMunicipioSeleccionado, setColoniaSeleccionada]
  );

  const handleLocalidadChange = useCallback(
    (id: string) => {
      const coloniaEncontrada = colonias.find((col) => col.ASENTA_ID === id);
      if (coloniaEncontrada) {
        setColoniaSeleccionada({
          id: coloniaEncontrada.ASENTA_ID,
          nombre: coloniaEncontrada.COLONIA,
        });
      }
    },
    [colonias, setColoniaSeleccionada]
  );

  // Submit y cancel
  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const precioBaseParsed =
        Number.parseFloat(precioBaseValue.replace(/[$,]/g, "")) || 0;

      console.log("Formulario enviado", {
        nombre,
        tipo,
        categoria,
        descripcion,
        imagenes,
        precioBase: precioBaseParsed,
        cantidad,
        estado: estadoSeleccionado?.nombre,
        municipio: municipioSeleccionado?.nombre,
        localidad: coloniaSeleccionada?.nombre,
        extras,
      });
    },
    [
      nombre,
      tipo,
      categoria,
      descripcion,
      imagenes,
      precioBaseValue,
      cantidad,
      estadoSeleccionado,
      municipioSeleccionado,
      coloniaSeleccionada,
      extras,
    ]
  );

  const handleCancel = useCallback(() => {
    setNombre("");
    setTipo("");
    setCategoria("");
    setDescripcion("");
    setExtras([]);
    setExtraInput("");
    setCantidad("");
    setPrecioBase("$");
    setExtraPrice("$");
    setImagenes([]);
    clearFilesRef.current?.();
    setEstadoSeleccionado(null);
    setMunicipioSeleccionado(null);
    setColoniaSeleccionada(null);
    onCloseModal();
  }, [
    onCloseModal,
    setEstadoSeleccionado,
    setMunicipioSeleccionado,
    setColoniaSeleccionada,
  ]);

  return {
    estados,
    estadoSeleccionado,
    municipios,
    municipioSeleccionado,
    colonias,
    coloniaSeleccionada,
    nombre,
    tipo,
    categoria,
    descripcion,
    extras,
    extraInput,
    cantidad: cantidadValue,
    precioBaseValue,
    extraPriceValue,
    imagenes,
    // Handlers
    handleNombreChange: debouncedHandleNombreChange,
    handleDescripcionChange: debouncedHandleDescripcionChange,
    handleTipoChange,
    handleCategoriaChange,
    handleExtraInputChange,
    handleEstadoChange,
    handleMunicipioChange,
    handleLocalidadChange,
    handleCantidadChange,
    handlePrecioBaseChange,
    handlePrecioBaseBlur,
    handleExtraPriceChange,
    handleExtraPriceBlur,
    addExtra,
    removeExtra,
    handleSubmit,
    handleCancel,
    handleUpload,
    handleRemoveFile,
    registerClearFiles,
  };
}
