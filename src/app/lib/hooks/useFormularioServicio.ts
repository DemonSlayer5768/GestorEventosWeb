import { useState } from "react";
import useTextFieldCurrency from "@Lib/hooks/useTextFieldCurrency";

export interface Extra {
  name: string;
  price: number;
}

export function useFormularioServicio(onCloseModal: () => void) {
  // variables
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [disponibilidad, setDisponibilidad] = useState("");
  const [extras, setExtras] = useState<Extra[]>([]);
  const [extraInput, setExtraInput] = useState("");
  const [precioBase, setPrecioBase] = useState("");
  const [extraPrice, setExtraPrice] = useState("");

  // Hooks de formateo para cada campo numérico
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

  const addExtra = () => {
    console.log("si entro a extra");
    console.log("Valor del precio antes de parsear:", extraPriceValue); // Debug

    if (
      extraInput.trim() !== "" &&
      !extras.some((e) => e.name === extraInput.trim())
    ) {
      // Remover el símbolo de dólar y comas antes de convertir a número
      const price =
        Number.parseFloat(extraPriceValue.replace(/[$,]/g, "")) || 0;

      console.log("Precio parseado:", price); // Debug

      setExtras([...extras, { name: extraInput.trim(), price }]);

      // Resetear los campos después de agregar
      setExtraInput("");
      handleExtraPriceChange({
        target: { value: "$" },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const removeExtra = (extraName: string) => {
    setExtras(extras.filter((e) => e.name !== extraName));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const precioBaseParsed =
      Number.parseFloat(precioBaseValue.replace(/[$,]/g, "")) || 0;

    if (!tipo || !categoria || !disponibilidad || precioBaseParsed <= 0) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    console.log("Formulario enviado", {
      nombre,
      tipo,
      categoria,
      disponibilidad,
      precioBase: precioBaseParsed,
      extras,
    });
  };

  const handleCancel = () => {
    console.log("cancel intro");
    setNombre("");
    setTipo("");
    setCategoria("");
    setDisponibilidad("");
    setExtras([]);
    setExtraInput("");
    // setPrecioBase
    handlePrecioBaseChange({
      target: { value: "$" },
    } as React.ChangeEvent<HTMLInputElement>);
    //setExtraPrice
    handleExtraPriceChange({
      target: { value: "$" },
    } as React.ChangeEvent<HTMLInputElement>);

    onCloseModal();
  };

  return {
    //valores de los selects
    nombre,
    setNombre,
    tipo,
    setTipo,
    categoria,
    setCategoria,
    disponibilidad,
    setDisponibilidad,
    // Valores y funciones para los TextField con moneda
    extras,
    extraInput,
    setExtraInput,
    addExtra,
    removeExtra,
    handleSubmit,
    precioBaseValue,
    handlePrecioBaseChange,
    handlePrecioBaseBlur,
    extraPriceValue,
    handleExtraPriceChange,
    handleExtraPriceBlur,
    //cerrar modal,
    handleCancel,
  };
}
