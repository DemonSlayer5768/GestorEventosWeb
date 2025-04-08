import { NextResponse } from "next/server";
import ConexionDB from "@Lib/DB/conexionDB";

export async function POST(req: Request) {
  try {
    const {
      userId,
      nombre,
      tipo,
      categoria,
      descripcion,
      imagenes,
      precioBase,
      cantidad,
      estadoSeleccionado,
      municipioSeleccionado,
      coloniaSeleccionada,
      extras,
    } = await req.json();

    // console.log("Datos recibidos en la api:", {
    //   userId,
    //   nombre,
    //   tipo,
    //   categoria,
    //   descripcion,
    //   imagenes,
    //   precioBase,
    //   cantidad,
    //   estadoSeleccionado,
    //   municipioSeleccionado,
    //   coloniaSeleccionada,
    //   extras,
    // });

    // Validación correcta
    if (
      !userId ||
      !nombre ||
      !tipo ||
      !categoria ||
      !descripcion ||
      !precioBase ||
      !cantidad ||
      !estadoSeleccionado ||
      !municipioSeleccionado ||
      !coloniaSeleccionada
    ) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios" },
        { status: 400 }
      );
    }

    // Convertir las columnas 'imagenes' y 'extras' a JSON (ya que imagenes es base64 y extras es un objeto)
    const imagenesJSON = imagenes ? JSON.stringify(imagenes) : null;
    const extrasJSON = extras ? JSON.stringify(extras) : null;

    const query = `
    INSERT INTO servicios 
    (Usuario_id, Nombre, Tipo, Categoria, Descripcion, imagenes, Precio, Cantidad, Estado, Municipio, Localidad, Extras) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

    // Nota: El campo 'id_servicio' no debe estar en la lista de columnas ni en los valores
    const values = [
      userId,
      nombre,
      tipo,
      categoria,
      descripcion,
      imagenesJSON, // Guardar imagenes como JSON (base64)
      precioBase,
      cantidad,
      estadoSeleccionado,
      municipioSeleccionado,
      coloniaSeleccionada,
      extrasJSON, // Guardar extras como JSON
    ];

    const [result] = await ConexionDB.execute(query, values);

    return NextResponse.json(
      { message: "Servicio registrado correctamente", result },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error al registrar servicio:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
