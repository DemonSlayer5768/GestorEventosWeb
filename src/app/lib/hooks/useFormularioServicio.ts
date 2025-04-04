import { useState } from "react";
import useTextFieldCurrency from "@Lib/hooks/useTextFieldCurrency";
import { useTextFieldInteger } from "@Lib/hooks/useTextFiledInteger";
import { useEstado } from "@Lib/hooks/useEstadosMexico";
import { useMunicipio } from "@Lib/hooks/useMunicipiosMexico";
import { useLocalidad } from "@Lib/hooks/useLocalidadMexico";

// Definir la interfaz de "Extra", que tiene un nombre y un precio
export interface Extra {
  name: string;
  price: number;
}
// Hook principal del formulario
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

  // Hooks para formatear los campos numéricos (moneda y enteros)
  const {
    value: precioBaseValue,
    handleChange: handlePrecioBaseChange,
    handleBlur: handlePrecioBaseBlur,
  } = useTextFieldCurrency(precioBase, setPrecioBase);

  const {
    value: extraPriceValue,
    handleChange: handleExtraPriceChange,
    handleBlur: handleExtraPriceBlur,
  } = useTextFieldCurrency(extraPrice, setExtraPrice);

  const { value: cantidadValue, handleChange: handleCantidadChange } =
    useTextFieldInteger(cantidad, setCantidad);

  // Función para agregar un extra (producto adicional)
  const addExtra = () => {
    // Verificar que el nombre del extra no esté vacío y no sea duplicado
    if (
      extraInput.trim() !== "" &&
      !extras.some((e) => e.name === extraInput.trim())
    ) {
      // Parsear el precio, eliminando el símbolo de dólar y comas
      const price =
        Number.parseFloat(extraPriceValue.replace(/[$,]/g, "")) || 0;

      // Agregar el extra a la lista
      setExtras([...extras, { name: extraInput.trim(), price }]);

      // Limpiar los campos de input de extra después de agregar
      setExtraInput("");
      handleExtraPriceChange({
        target: { value: "$" },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  // Función para eliminar un extra de la lista
  const removeExtra = (extraName: string) => {
    setExtras(extras.filter((e) => e.name !== extraName));
  };

  // Función para manejar la carga de imágenes (archivos seleccionados)
  const handleUpload = (files: File[]) => {
    // console.log("Archivos seleccionados:", files);
    setImagenes(files); // Actualizamos el estado con las nuevas imágenes
  };

  // Hook para manejar los estados de México
  const { estados, estadoSeleccionado, setEstadoSeleccionado } = useEstado();

  // Hook para manejar los municipios, dependiendo del estado seleccionado
  const municipioHook = useMunicipio(municipio, estadoSeleccionado);

  // Desestructuración condicional: si hay estado seleccionado, usamos el hook; si no, valores por defecto
  const { municipios, municipioSeleccionado, setMunicipioSeleccionado } =
    estadoSeleccionado
      ? municipioHook
      : {
          municipios: [],
          municipioSeleccionado: null,
          setMunicipioSeleccionado: () => {},
        };

  // // Hook para manejar colonias, dependiendo del estado y municipio seleccionados
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

  // Desestructuración condicional: si hay estado y municipio, usamos el hook; si no, valores por defecto
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

    // Parsear el precio base
    const precioBaseParsed =
      Number.parseFloat(precioBaseValue.replace(/[$,]/g, "")) || 0;

    // Validar que los campos obligatorios estén completos
    // if (!tipo || !categoria || precioBaseParsed <= 0) {
    //   alert("Por favor, completa todos los campos obligatorios.");
    //   return;
    // }

    console.log("Formulario enviado", {
      nombre,
      tipo,
      categoria,
      descripcion,
      imagenes,
      precioBase: precioBaseParsed,
      cantidad,
      estado: estadoSeleccionado?.nombre || "",
      municipio: municipioSeleccionado?.nombre || "",
      localidad: coloniaSeleccionada?.nombre || "",
      extras,
    });
  };

  // Función para manejar el cancelamiento del formulario (limpiar los campos)
  const handleCancel = () => {
    // Resetear todos los campos del formulario
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
    setImagenes([]); // Limpiar las imágenes seleccionadas
    setEstadoSeleccionado(null); // Limpiar el estado seleccionado
    setMunicipioSeleccionado(null); // Limpiar el municipio seleccionado
    setColoniaSeleccionada(null); // Limpiar la colonia seleccionada
    setEstado(""); // Limpiar el estado
    setMunicipio(""); // Limpiar el municipio
    setLocalidad(""); // Limpiar la localidad
    setPrecioBase(""); // Limpiar el precio base
    onCloseModal(); // Cerrar el modal
  };

  // Retorno de los valores y funciones necesarias para el formulario
  return {
    // Valores de los campos del estado, municipio y colonia
    estados,
    estadoSeleccionado,
    setEstadoSeleccionado,
    municipios,
    municipioSeleccionado,
    setMunicipioSeleccionado,
    colonias,
    coloniaSeleccionada,
    setColoniaSeleccionada,
    // Funciones para manejar los campos de texto
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
    // Valores y funciones para el manejo de extras
    extras,
    extraInput,
    setExtraInput,
    cantidad: cantidadValue,
    handleCantidadChange,
    addExtra,
    removeExtra,
    // Funciones para el envío y cancelación del formulario
    handleSubmit,
    // Campos y funciones para los campos de texto de moneda
    precioBaseValue,
    handlePrecioBaseChange,
    handlePrecioBaseBlur,
    extraPriceValue,
    handleExtraPriceChange,
    handleExtraPriceBlur,
    // Funciones para la carga de imágenes
    handleUpload,
    imagenes,
    handleCancel,
  };
}
