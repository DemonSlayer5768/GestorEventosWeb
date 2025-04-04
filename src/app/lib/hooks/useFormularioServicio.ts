import { useState } from "react";
import useTextFieldCurrency from "@Lib/hooks/useTextFieldCurrency";
import { useTextFieldInteger } from "@Lib/hooks/useTextFiledInteger";

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
    console.log("Archivos seleccionados:", files);
    setImagenes(files); // Actualizamos el estado con las nuevas imágenes
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

    // Imprimir los datos del formulario al enviar
    console.log("Formulario enviado", {
      nombre,
      tipo,
      categoria,
      descripcion,
      imagenes,
      precioBase: precioBaseParsed,
      cantidad,
      extras,
    });

    console.log("files:", imagenes);
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
    onCloseModal(); // Cerrar el modal
  };

  // Retorno de los valores y funciones necesarias para el formulario
  return {
    // Valores de los campos del formulario
    nombre,
    setNombre,
    tipo,
    setTipo,
    categoria,
    setCategoria,
    descripcion,
    setDescripcion,
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
