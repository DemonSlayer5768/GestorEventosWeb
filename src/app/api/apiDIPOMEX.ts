// apiDIPOMEX.ts
export const obtenerEstados = async () => {
  try {
    const response = await fetch("http://localhost:3050/api/estados");
    const data = await response.json();
    console.log("Estados:", data);
    return data; // 🔹 Devuelve los datos
  } catch (error) {
    console.error("Error obteniendo estados:", error);
    return []; // 🔹 Devuelve un array vacío en caso de error
  }
};

export const obtenerMunicipios = async (estadoId: string) => {
  try {
    const response = await fetch(
      `http://localhost:3050/api/municipios?id_estado=${estadoId}`
    );
    const data = await response.json();
    console.log("Municipios:", data);
    return data; // 🔹 Devuelve los datos
  } catch (error) {
    console.error("Error obteniendo municipios:", error);
    return [];
  }
};

export const obtenerColonias = async (
  estadoId: string,
  municipioId: string
) => {
  try {
    const response = await fetch(
      `http://localhost:3050/api/colonias?id_estado=${estadoId}&id_mun=${municipioId}`
    );
    const data = await response.json();
    console.log("Colonias:", data);
    return data; // 🔹 Devuelve los datos
  } catch (error) {
    console.error("Error obteniendo colonias:", error);
    return [];
  }
};
