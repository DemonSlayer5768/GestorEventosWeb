Estructura detallada

📂 GestorEventosWeb
│── 📂 .next/ # Archivos de compilación (Next.js build folder)
│── 📂 node_modules/ # Dependencias de Node.js
│── 📂 public/ # Archivos estáticos (imágenes, logos, etc.)
│── 📂 DB/ # Configuración de base de datos
│ │── ConexionDB.js # Archivo de conexión a la base de datos
│── 📂 src/ # Carpeta principal del código fuente
│ │ │── 📂 components/ # Componentes reutilizables
│ │ │ | │── 📂 inicio/ # componentes de la pagina inicio
│ │ │ | │── 📂 SingIn/ # Componentes relacionados con el login
│ │ │ | │── 📂 ui/ # Botones, inputs, modales, etc.
│ │ │ | │── 📂 users/ # Componentes específicos de usuarios
| | | | | | |──📂 Clientes/ # Componentes específicos de clientes
| | | | | | |──📂 Proveedores/ # Componentes específicos de proveedores
| | | | | | |──📂 Administradores/ # Componentes específicos de administradores
│ │ │── 📂 lib/ # Configuraciones generales (conexión DB, API, etc.)
| | │ │ │── 📂 data/ # consultas para traer datos de la db
| | │ │ │── 📂 hooks/ # Custom hooks de React (useAuth, etc.)
| | | | |── 📂 utils/ # Funciones auxiliares (formatos de fecha, validaciones, etc.)
| | │ │ │── 📂 store/ # Gestión de estado global (Redux, Zustand, Context API)
│ │ |── 📂 app/ # Contenedor principal de la aplicación (Next.js App Router)
| | | | ──📂api / # Funciones que manejan peticiones a la API
| | | | | |──📂login
| | | | | | | |──route.ts #hacer peticion para validar al usuario
| | | | | |──📂Register
| | | | | | | |──route.ts #hacer peticion para registrar al usaurio en la db
| | | | | |── apiDIPOMEX.ts
| | | | | |── moreApis.ts
│ | │ │── 📂 Administradores
| | | | | |──page.tsx
│ | │ │── 📂 BandejaCorreos
| | | | | |──page.tsx
│ | │ │── 📂 CatalogoSalonesClientes
| | | | | |──page.tsx
│ | │ │── 📂 CatalogoSalonesProveedores
| | | | | |──page.tsx
│ | │ │── 📂 Clientes
| | | | | |──page.tsx
│ │ | │── 📂 CrearEventoCliente
| | | | | |──page.tsx
│ │ | │── 📂 Login
| | | | | |──page.tsx
│ │ | │── 📂 PaquetesEventos
| | | | | |──page.tsx
│ │ │ |── 📂 Proveedores
| | | | |──page.tsx
│ │ | │── 📂 ServicioEventosClientes
| | | | | |──page.tsx
│ │ | │── 📂 ServicioEventosProveedores
| | | | | |──page.tsx
| │ │ │── 📂 styles/ # Archivos de estilos globales
| | | | | |──Aurora.css
| | | | | |──create-event.css
| | | | | |──globlas.css
│ │ | │── layout.tsx # Layout principal
│ │ | │── page.tsx # Página principal
|── .env #Archivo api Keys
│── .gitignore # Archivos ignorados por Git
|── eslint.config.mjs
|── next-env.d.ts
│── next.config.js # Configuración de Next.js
|── package-lock.json
│── package.json # Dependencias y scripts del proyecto
|── postcss.config.js
│── postcss.config.mjs # Configuración de PostCSS
│── README.md # Documentación del proyecto
│── server.js # Servidor si Next.js está corriendo en modo backend
|── tailwind.config.js
│── tailwind.config.ts # Configuración de Tailwind CSS
│── tsconfig.json # Configuración de TypeScript
