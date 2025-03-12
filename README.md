📂 GestorEventosWeb
│── 📂 .next/ # Archivos de compilación (Next.js build folder)
│── 📂 node_modules/ # Dependencias de Node.js
│── 📂 public/ # Archivos estáticos (imágenes, logos, etc.)
│── 📂 src/ # Carpeta principal del código fuente
│ │── 📂 app/ # Contenedor principal de la aplicación (Next.js App Router)
│ │ │── 📂 components/ # Componentes reutilizables
│ │ │ │── 📂 common/ # Botones, inputs, modales, etc.
│ │ │ │── 📂 layout/ # Header, Sidebar, Footer
│ │ │ │── 📂 auth/ # Componentes relacionados con autenticación
│ │ │ │── 📂 users/ # Componentes específicos de usuarios
│ │ │── 📂 hooks/ # Custom hooks de React (useAuth, useFetch, etc.)
│ │ │── 📂 lib/ # Configuraciones generales (conexión DB, API, etc.)
│ │ │── 📂 pages/ # Rutas de páginas si usas el Pages Router
│ │ │── 📂 services/ # Funciones que manejan peticiones a la API
│ │ │── 📂 store/ # Gestión de estado global (Redux, Zustand, Context API)
│ │ │── 📂 styles/ # Archivos de estilos globales
│ │ │── 📂 utils/ # Funciones auxiliares (formatos de fecha, validaciones, etc.)
│ │ │── layout.tsx # Layout principal
│ │ │── page.tsx # Página principal
│── 📂 DB/ # Configuración de base de datos
│ │── ConexionDB.js # Archivo de conexión a la base de datos
│── 📂 styles/ # Estilos globales de Tailwind u otras librerías CSS
│── .gitignore # Archivos ignorados por Git
│── next.config.js # Configuración de Next.js
│── package.json # Dependencias y scripts del proyecto
│── postcss.config.cjs # Configuración de PostCSS (renombrado a .cjs)
│── tailwind.config.ts # Configuración de Tailwind CSS
│── tsconfig.json # Configuración de TypeScript
│── README.md # Documentación del proyecto
│── server.js # Servidor si Next.js está corriendo en modo backend

Estructura detallada
Copy
src/
│── 📂 hooks/ # Custom hooks de React (useAuth, useFetch, etc.)
│ │── 📂 lib/ # Configuraciones generales (conexión DB, API, etc.)
│ │── 📂 pages/ # Rutas de páginas si usas el Pages Router
│ │── 📂 services/ # Funciones que manejan peticiones a la API
│ │── 📂 store/ # Gestión de estado global (Redux, Zustand, Context API)
│ │── 📂 utils/ # Funciones utilitarias (helpers, validaciones, etc.)

1. 📂 hooks/
   Los custom hooks son funciones reutilizables que encapsulan lógica de React. Aquí puedes colocar hooks personalizados que uses en tu aplicación.

Ejemplo de estructura:
Copy
src/
│── 📂 hooks/
│ │── useAuth.ts # Hook para manejar autenticación
│ │── useFetch.ts # Hook para hacer peticiones HTTP
│ │── useLocalStorage.ts # Hook para interactuar con localStorage
│ │── useTheme.ts # Hook para manejar el tema de la aplicación
Ejemplo de un custom hook (useAuth.ts):
typescript
Copy
import { useState, useEffect } from "react";

export const useAuth = () => {
const [isAuthenticated, setIsAuthenticated] = useState(false);

useEffect(() => {
// Lógica para verificar si el usuario está autenticado
const token = localStorage.getItem("token");
setIsAuthenticated(!!token);
}, []);

return { isAuthenticated };
}; 2. 📂 lib/
La carpeta lib/ se usa para almacenar configuraciones generales y código relacionado con la infraestructura de la aplicación.

Ejemplo de estructura:
Copy
src/
│── 📂 lib/
│ │── apiClient.ts # Configuración de Axios o Fetch para peticiones HTTP
│ │── dbConnection.ts # Configuración de la conexión a la base de datos
│ │── constants.ts # Constantes globales (ej: colores, rutas, etc.)
│ │── theme.ts # Configuración del tema (si usas styled-components o similar)
Ejemplo de configuración de API (apiClient.ts):
typescript
Copy
import axios from "axios";

const apiClient = axios.create({
baseURL: process.env.NEXT_PUBLIC_API_URL,
headers: {
"Content-Type": "application/json",
},
});

export default apiClient; 3. 📂 pages/
Si estás usando el Pages Router de Next.js, esta carpeta contiene las rutas de tu aplicación. Cada archivo en pages/ se convierte en una ruta.

Ejemplo de estructura:
Copy
src/
│── 📂 pages/
│ │── index.tsx # Página de inicio (/)
│ │── about.tsx # Página "Sobre Nosotros" (/about)
│ │── auth/
│ │ │── login.tsx # Página de inicio de sesión (/auth/login)
│ │ │── register.tsx # Página de registro (/auth/register)
Ejemplo de una página (index.tsx):
tsx
Copy
import Link from "next/link";

export default function Home() {
return (
<div>
<h1>Bienvenido a mi aplicación</h1>
<Link href="/about">Sobre Nosotros</Link>
</div>
);
} 4. 📂 services/
En esta carpeta colocas funciones que manejan la lógica de negocio, como peticiones a APIs externas o internas.

Ejemplo de estructura:
Copy
src/
│── 📂 services/
│ │── authService.ts # Servicios relacionados con autenticación
│ │── userService.ts # Servicios relacionados con usuarios
│ │── productService.ts # Servicios relacionados con productos
Ejemplo de un servicio (authService.ts):
typescript
Copy
import apiClient from "../lib/apiClient";

export const login = async (email: string, password: string) => {
const response = await apiClient.post("/auth/login", { email, password });
return response.data;
};

export const register = async (userData: any) => {
const response = await apiClient.post("/auth/register", userData);
return response.data;
}; 5. 📂 store/
Aquí se gestiona el estado global de la aplicación. Puedes usar librerías como Redux, Zustand o Context API.

Ejemplo de estructura:
Copy
src/
│── 📂 store/
│ │── slices/ # Slices de Redux (si usas Redux Toolkit)
│ │ │── authSlice.ts # Slice para manejar autenticación
│ │ │── userSlice.ts # Slice para manejar datos de usuario
│ │── store.ts # Configuración del store de Redux
Ejemplo de un slice (authSlice.ts):
typescript
Copy
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
name: "auth",
initialState: { isAuthenticated: false },
reducers: {
login(state) {
state.isAuthenticated = true;
},
logout(state) {
state.isAuthenticated = false;
},
},
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer; 6. 📂 utils/
En esta carpeta colocas funciones utilitarias que no están relacionadas directamente con la lógica de negocio, como validaciones, formateadores, etc.

Ejemplo de estructura:
Copy
src/
│── 📂 utils/
│ │── validators.ts # Funciones de validación (ej: validar email)
│ │── formatters.ts # Funciones de formateo (ej: formatear fechas)
│ │── helpers.ts # Funciones de ayuda (ej: generar IDs únicos)
Ejemplo de una función utilitaria (validators.ts):
typescript
Copy
export const isValidEmail = (email: string): boolean => {
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return regex.test(email);
}; 7. 📂 components/
Aunque no lo mencionaste en tu estructura, es común tener una carpeta components/ para almacenar componentes reutilizables.

Ejemplo de estructura:
Copy
src/
│── 📂 components/
│ │── 📂 ui/ # Componentes de UI reutilizables (Button, Input, etc.)
│ │── 📂 layout/ # Componentes de layout (Header, Footer, etc.)
│ │── 📂 auth/ # Componentes relacionados con autenticación
Ejemplo de un componente (Button.tsx):
tsx
Copy
import React from "react";

interface ButtonProps {
children: React.ReactNode;
onClick?: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
return (
<button
      onClick={onClick}
      className="bg-blue-500 text-white px-4 py-2 rounded"
    >
{children}
</button>
);
};
Resumen
hooks/: Custom hooks para reutilizar lógica.

lib/: Configuraciones generales y código de infraestructura.

pages/: Rutas de la aplicación (si usas Pages Router).

services/: Lógica de negocio y peticiones a APIs.

store/: Gestión del estado global.

utils/: Funciones utilitarias y helpers.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
