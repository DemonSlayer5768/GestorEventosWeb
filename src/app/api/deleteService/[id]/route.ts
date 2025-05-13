// app/api/deleteService/[id]/route.ts
import { NextResponse } from "next/server";
import ConexionDB from "@Lib/DB/conexionDB";
import type { ResultSetHeader } from "mysql2";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  try {
    const conn = await ConexionDB.getConnection();
    const [result]: [ResultSetHeader, unknown] = await conn.query(
      "DELETE FROM servicios WHERE id = ?",
      [id]
    );
    conn.release();

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { message: "Servicio no encontrado." },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Servicio eliminado correctamente." });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { message: "Error al eliminar el servicio.", error: errorMessage },
      { status: 500 }
    );
  }
}
