import { useState } from "react";
import { useAuth } from "@Lib/hooks/useAuth"; // 🔹 Importamos useAuth

export function useRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // 🔹 Estado de carga
  const [typeUser, setTypeUser] = useState(false); // 🔹 Estado del checkbox (false = cliente, true = proveedor)
  const { login } = useAuth(); // 🔹 Obtenemos login() de useAuth

  const togglePassword = () => setShowPassword(!showPassword);

  const getUserType = () => (typeUser ? 2 : 1); // 🔹 Devuelve 2 si es proveedor, 1 si es cliente

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true); // 🔹 Activa el estado de carga

    if (!email || !password || !user || !phone) {
      setError("Por favor llena todos los datos");
      setLoading(false); // 🔹 Asegura que loading se desactive
      return;
    }

    try {
      const userType = getUserType(); // 🔹 Determina el tipo de usuario antes de enviarlo

      const response = await fetch("/api/AuthRegister", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user,
          email,
          phone,
          password,
          typeUser: userType,
        }),
      });

      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error || "Error al registrar usuario");

      console.log("Usuario registrado:", data);

      // 🔹 Iniciar sesión automáticamente
      await login(email, password);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error desconocido");
    } finally {
      setLoading(false); // 🔹 Desactiva el loading
    }
  };

  return {
    showPassword,
    togglePassword,
    user,
    setUser,
    phone,
    setPhone,
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleSubmit,
    typeUser,
    setTypeUser,
    loading, // 🔹 Devuelve loading para deshabilitar botones si es necesario
  };
}
