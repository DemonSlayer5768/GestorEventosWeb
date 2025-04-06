import { useState, useEffect } from "react";
import { useRoutes } from "@Lib/hooks/useRoutes";
import { useRouter } from "next/navigation";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter(); // Inicializamos el router
  const route = useRoutes(); // Obtenemos las rutas definidas

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  async function login(email: string, password: string) {
    try {
      // console.log("Enviando credenciales:", { email, password });

      const response = await fetch("/api/AuthLogin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      // console.log("Datos recibidos del servidor:", data);

      if (!response.ok) {
        console.error("Error en la API:", data.error);
        throw new Error(data.error);
      }

      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));

      // 🔹 Redirigir según el tipo de usuario
      if (data.tipoUsuario === 1) {
        router.push(route.cliente); // Redirige a la ruta de usuarios
      } else if (data.tipoUsuario === 2) {
        router.push(route.proveedores); // Redirige a la ruta de proveedores
      }

      return data;
    } catch (error) {
      console.error("Error en login:", error);
      throw error;
    }
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }

  return { user, login, logout, loading };
}
