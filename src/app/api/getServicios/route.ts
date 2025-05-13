// endPoint: /api/getServicios
import { NextResponse } from "next/server";
import ConexionDB from "@Lib/DB/conexionDB";
import { RowDataPacket } from "mysql2";

interface Servicio extends RowDataPacket {
  id: number;
  userId: string;
  nombre: string;
  tipo: string;
  categoria: string;
  descripcion: string;
  imagenes: string;
  precioBase: number;
  cantidad: number;
  estado: string;
  municipio: string;
  localidad: string;
  extras: string;
  fechaCreacion: Date;
}

export async function GET(req: Request) {
  try {
    // Obtener parámetros de búsqueda de la URL
    const { searchParams } = new URL(req.url);

    // Parámetros opcionales para filtrar
    const userId = searchParams.get("userId");
    const tipo = searchParams.get("tipo");
    const categoria = searchParams.get("categoria");
    const estado = searchParams.get("estado");
    const municipio = searchParams.get("municipio");
    const localidad = searchParams.get("localidad");

    // Construir la consulta base
    let query = `
      SELECT 
        id_servicio as id,
        Usuario_id as userId,
        Nombre as nombre,
        Tipo as tipo,
        Categoria as categoria,
        Descripcion as descripcion,
        imagenes,
        Precio as precioBase,
        Cantidad as cantidad,
        Estado as estado,
        Municipio as municipio,
        Localidad as localidad,
        Extras as extras,
        Fecha_creacion as fechaCreacion
      FROM servicios
      WHERE 1=1
    `;

    // Añadir condiciones de filtrado según los parámetros proporcionados
    const params = [];

    if (userId) {
      query += " AND Usuario_id = ?";
      params.push(userId);
    }

    if (tipo) {
      query += " AND Tipo = ?";
      params.push(tipo);
    }

    if (categoria) {
      query += " AND Categoria = ?";
      params.push(categoria);
    }

    if (estado) {
      query += " AND Estado = ?";
      params.push(estado);
    }

    if (municipio) {
      query += " AND Municipio = ?";
      params.push(municipio);
    }

    if (localidad) {
      query += " AND Localidad = ?";
      params.push(localidad);
    }

    // Ordenar por fecha de creación (más recientes primero)
    query += " ORDER BY Fecha_creacion DESC";

    // Ejecutar la consulta con tipado adecuado
    const [servicios] = await ConexionDB.execute<Servicio[]>(query, params);

    // Verificar que servicios es un array antes de usar map
    if (!Array.isArray(servicios)) {
      return NextResponse.json([], { status: 200 });
    }

    // Parsear los campos JSON (imagenes y extras)
    const serviciosParseados = servicios.map((servicio) => ({
      ...servicio,
      imagenes: servicio.imagenes ? JSON.parse(servicio.imagenes) : null,
      extras: servicio.extras ? JSON.parse(servicio.extras) : null,
    }));

    return NextResponse.json(serviciosParseados, { status: 200 });
  } catch (error) {
    console.error("Error al obtener servicios:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
