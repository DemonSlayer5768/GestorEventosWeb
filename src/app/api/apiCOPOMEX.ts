// apiCOPOMEX.ts

const token = "2059dc29-dd9d-4485-a2da-f0392a119e8c";
// const token = "";

const cache = {
  estados: null as string[] | null,
  municipios: new Map<string, string[]>(), // Clave: nombre del estado, Valor: municipios
  colonias: new Map<string, Map<string, string[]>>(), // Clave: estado -> municipio -> colonias
};

export async function obtenerEstados() {
  if (cache.estados) {
    console.log("Usando cache para estados");
    return cache.estados;
  }
  console.log("Petición estados");
  const url = `https://api.copomex.com/query/get_estados?token=${token}`;
  const respuesta = await fetch(url);
  const datos = await respuesta.json();
  cache.estados = datos.response.estado || [];
  return cache.estados;
}

export async function obtenerMunicipios(estado: string) {
  if (cache.municipios.has(estado)) {
    console.log(`Usando cache para municipios de ${estado}`);
    return cache.municipios.get(estado);
  }
  console.log(`Petición municipios para ${estado}`);
  const url = `https://api.copomex.com/query/get_municipio_por_estado/${estado}?token=${token}`;
  const respuesta = await fetch(url);
  const datos = await respuesta.json();
  const municipios = datos.response.municipios || [];
  cache.municipios.set(estado, municipios);
  return municipios;
}

export async function obtenerColonias(estado: string, municipio: string) {
  if (
    cache.colonias.has(estado) &&
    cache.colonias.get(estado)?.has(municipio)
  ) {
    console.log(`Usando cache para colonias de ${municipio}, ${estado}`);
    return cache.colonias.get(estado)?.get(municipio);
  }

  console.log(`Petición colonias para ${municipio}, ${estado}`);
  const url = `https://api.copomex.com/query/get_colonia_por_estado_municipio?token=${token}&estado=${estado}&municipio=${municipio}`;

  try {
    const respuesta = await fetch(url);
    if (!respuesta.ok) {
      throw new Error(`Error en la API: ${respuesta.status}`);
    }

    const datos = await respuesta.json();
    const colonias = datos.response.colonias || [];

    // Verificar si el estado ya tiene un Map en el caché, si no, crearlo
    if (!cache.colonias.has(estado)) {
      cache.colonias.set(estado, new Map());
    }

    // Guardar el municipio y sus colonias en el cache
    cache.colonias.get(estado)?.set(municipio, colonias);

    return colonias;
  } catch (error) {
    console.error("Error al obtener colonias:", error);
    return [];
  }
}
