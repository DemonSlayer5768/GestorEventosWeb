import { NextResponse } from "next/server";
import ConexionDB from "@Lib/conexionDB";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { user, email, phone, password } = await req.json();

    if (!user || !email || !phone || !password) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios" },
        { status: 400 }
      );
    }

    // Encriptar la contraseña
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insertar en la base de datos
    const query =
      "INSERT INTO usuarios (nombre, correo, telefono, contraseña) VALUES (?, ?, ?, ?)";
    const values = [user, email, phone, hashedPassword];

    const [result] = await ConexionDB.execute(query, values);

    return NextResponse.json(
      { message: "Usuario registrado correctamente", result },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error al registrar usuario:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
