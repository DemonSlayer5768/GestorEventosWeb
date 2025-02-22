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
