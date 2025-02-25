import ConexionDB from "@Lib/conexionDB";

// Define el tipo de usuario
interface User {
  user: string;
  phone: string;
  email: string;
  password: string;
}

// Funcion para registrar un usuario en la BD
export async function registerUser({ user, email, phone, password }: User) {
  try {
    const [rows] = await ConexionDB.query(
      `INSERT INTO usuarios (nombre, correo, telefono, contraseña) VALUES (${user}, ${email}, ${phone}, ${password});`
    );

    return {
      success: true,
      message: "Usuario registrado con éxito",
      data: rows,
    };
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    return { success: false, message: "Error al registrar usuario" };
  }
}
