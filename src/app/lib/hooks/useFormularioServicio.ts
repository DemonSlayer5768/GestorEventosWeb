import { useState } from "react";

export interface Extra {
  name: string;
  price: number;
}

export function useFormularioServicio() {
  const [extras, setExtras] = useState<Extra[]>([]);
  const [extraInput, setExtraInput] = useState("");
  const [extraPriceInput, setExtraPriceInput] = useState("");

  const addExtra = () => {
    if (
      extraInput.trim() !== "" &&
      !extras.some((e) => e.name === extraInput.trim())
    ) {
      const price = Number.parseFloat(extraPriceInput) || 0;
      setExtras([...extras, { name: extraInput.trim(), price }]);
      setExtraInput("");
      setExtraPriceInput("");
    }
  };

  const removeExtra = (extraName: string) => {
    setExtras(extras.filter((e) => e.name !== extraName));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado", { extras });
  };

  return {
    extras,
    extraInput,
    extraPriceInput,
    setExtraInput,
    setExtraPriceInput,
    addExtra,
    removeExtra,
    handleSubmit,
  };
}
