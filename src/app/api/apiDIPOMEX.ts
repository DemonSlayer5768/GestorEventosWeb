// apiDIPOMEX.ts

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const obtenerEstados = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/estados`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error obteniendo estados:", error);
    return [];
  }
};

export const obtenerMunicipios = async (estadoId: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/municipios?id_estado=${estadoId}`
    );
    const data = await response.json();
    return data;
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
      `${BASE_URL}/api/colonias?id_estado=${estadoId}&id_mun=${municipioId}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error obteniendo colonias:", error);
    return [];
  }
};
