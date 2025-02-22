export async function verificarAutenticacion() {
  try {
    const response = await fetch("/api/auth/check"); // Llama a tu API de autenticación
    const data = await response.json();
    return data.autenticado; // Suponiendo que el backend responde con { autenticado: true/false }
  } catch (error) {
    console.error("Error al verificar la autenticación:", error);
    return false;
  }
}
