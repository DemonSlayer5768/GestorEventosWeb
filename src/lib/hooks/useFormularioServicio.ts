import { useState, useCallback, useRef } from "react";
import { OnlyCurrency } from "@Lib/utils/FilterOnlyValuesCurrency";
import { OnlyInteger } from "@Lib/utils/FilterOnlyValuesInteger";
import { useEstado } from "@Lib/hooks/useEstadosMexico";
import { useMunicipio } from "@Lib/hooks/useMunicipiosMexico";
import { useLocalidad } from "@Lib/hooks/useLocalidadMexico";

export interface Extra {
  name: string;
  price: number;
}

export function useFormularioServicio(onCloseModal: () => void) {
  // Definición de los estados del formulario
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precioBase, setPrecioBase] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [extras, setExtras] = useState<Extra[]>([]);
  const [extraInput, setExtraInput] = useState("");
  const [extraPrice, setExtraPrice] = useState("");
  const [imagenes, setImagenes] = useState<File[]>([]);
  const [estado, setEstado] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [localidad, setLocalidad] = useState("");
  const clearFilesRef = useRef<() => void>(() => {});

  // Funciones para manejar los cambios en los campos de texto
  const handleNombreChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setNombre(e.target.value);
    },
    []
  );

  const handleDescripcionChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setDescripcion(e.target.value);
    },
    []
  );

  // Hooks para formatear los campos numéricos (moneda y enteros)
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

  // Función para agregar un extra (producto adicional)
  const addExtra = () => {
    if (
      extraInput.trim() !== "" &&
      !extras.some((e) => e.name === extraInput.trim())
    ) {
      const price =
        Number.parseFloat(extraPriceValue.replace(/[$,]/g, "")) || 0;
      setExtras([...extras, { name: extraInput.trim(), price }]);
      setExtraInput("");
      handleExtraPriceChange({
        target: { value: "$" },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  // Función para eliminar un extra de la lista de extras
  const removeExtra = (extraName: string) => {
    setExtras(extras.filter((e) => e.name !== extraName));
  };

  // Función para manejar la carga de imágenes
  const handleUpload = (files: File[]) => {
    //agregar el nuevo archivo a la lista de imágenes
    setImagenes(files);
  };

  const registerClearFiles = useCallback((clearFn: () => void) => {
    clearFilesRef.current = clearFn;
  }, []);

  const handleRemoveFile = useCallback((index: number) => {
    setImagenes((prevFiles) => {
      const newFiles = [...prevFiles];
      newFiles.splice(index, 1);
      return newFiles;
    });
  }, []);

  // Hook para manejar los estados de México
  const { estados, estadoSeleccionado, setEstadoSeleccionado } = useEstado();

  // Hook para manejar los municipios
  // Uso del hook en el componente
  const municipioHook = useMunicipio(estadoSeleccionado); // Sólo pasa estadoSeleccionado

  const { municipios, municipioSeleccionado, setMunicipioSeleccionado } =
    municipioHook;

  // Hook para manejar colonias
  const localidadHook = useLocalidad(
    {
      id: estadoSeleccionado?.id || "",
      nombre: estadoSeleccionado?.nombre || "",
    },
    {
      id: municipioSeleccionado?.id || "",
      nombre: municipioSeleccionado?.nombre || "",
    }
  );
  const { colonias, coloniaSeleccionada, setColoniaSeleccionada } =
    estadoSeleccionado && municipioSeleccionado
      ? localidadHook
      : {
          colonias: [],
          coloniaSeleccionada: null,
          setColoniaSeleccionada: () => {},
        };

  // Función para manejar el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
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
    console.log("files:", imagenes);
  };

  // Función para manejar el cancelamiento del formulario
  const handleCancel = useCallback(() => {
    setNombre("");
    setTipo("");
    setCategoria("");
    setDescripcion("");
    setExtras([]);
    setExtraInput("");
    setCantidad("");
    handlePrecioBaseChange({
      target: { value: "$" },
    } as React.ChangeEvent<HTMLInputElement>);
    handleExtraPriceChange({
      target: { value: "$" },
    } as React.ChangeEvent<HTMLInputElement>);
    setImagenes([]);
    clearFilesRef.current?.();
    setEstado("");
    setMunicipio("");
    setLocalidad("");
    setEstadoSeleccionado(null);
    setMunicipioSeleccionado(null);
    setColoniaSeleccionada(null);
    onCloseModal();
  }, [
    onCloseModal,
    handlePrecioBaseChange,
    handleExtraPriceChange,
    setEstadoSeleccionado,
    setMunicipioSeleccionado,
    setColoniaSeleccionada,
  ]);

  return {
    handleNombreChange,
    handleDescripcionChange,
    estados,
    estadoSeleccionado,
    setEstadoSeleccionado,
    municipios,
    municipioSeleccionado,
    setMunicipioSeleccionado,
    colonias,
    coloniaSeleccionada,
    setColoniaSeleccionada,
    nombre,
    setNombre,
    tipo,
    setTipo,
    categoria,
    setCategoria,
    descripcion,
    setDescripcion,
    estado,
    municipio,
    localidad,
    setEstado,
    setMunicipio,
    setLocalidad,
    extras,
    extraInput,
    setExtraInput,
    cantidad: cantidadValue,
    handleCantidadChange,
    addExtra,
    removeExtra,
    handleSubmit,
    precioBaseValue,
    handlePrecioBaseChange,
    handlePrecioBaseBlur,
    extraPriceValue,
    handleExtraPriceChange,
    handleExtraPriceBlur,
    handleCancel,
    registerClearFiles,
    handleUpload,
    handleRemoveFile,
  };
}
