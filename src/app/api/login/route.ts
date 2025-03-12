import { NextResponse } from "next/server";
import ConexionDB from "@Lib/conexionDB"; // Sigue usando tu conexión
import bcrypt from "bcryptjs";
import { RowDataPacket, FieldPacket } from "mysql2";

interface Usuario extends RowDataPacket {
  id: number;
  nombre: string;
  correo: string;
  contraseña: string;
}

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Faltan datos" }, { status: 400 });
    }

    // Consulta SQL segura con placeholders
    const [rows]: [Usuario[], FieldPacket[]] = await ConexionDB.execute(
      `SELECT * FROM usuarios WHERE correo = ?`,
      [email]
    );

    // ❌ NO CERRAR EL POOL: await ConexionDB.end();

    if (rows.length === 0) {
      return NextResponse.json(
        { error: "Usuario no encontrado" },
        { status: 404 }
      );
    }

    const user = rows[0];

    // Comparar contraseña con bcrypt
    const isPasswordValid = await bcrypt.compare(password, user.contraseña);

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: "Contraseña incorrecta" },
        { status: 401 }
      );
    }

    return NextResponse.json({
      id: user.id,
      nombre: user.nombre,
      correo: user.correo,
    });
  } catch (error) {
    console.error("Error en el servidor:", error);
    return NextResponse.json(
      { error: "Error en el servidor" },
      { status: 500 }
    );
  }
}
