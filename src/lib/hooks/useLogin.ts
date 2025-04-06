import { useState } from "react";
import { useAuth } from "@Lib/hooks/useAuth";

export function useLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Nuevo estado de carga
  const { login } = useAuth();

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true); // 🔹 Activa el estado de carga

    if (!email || !password) {
      setError("Por favor, llena todos los datos");
      setLoading(false);
      return;
    }

    try {
      await login(email, password);
    } catch (error: unknown) {
      setError(
        error instanceof Error ? error.message : "Error al iniciar sesión"
      );
      setLoading(false);
    } finally {
      setLoading(false); // 🔹 Desactiva el estado de carga
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    showPassword,
    togglePassword,
    handleSubmit,
    loading,
  };
}
