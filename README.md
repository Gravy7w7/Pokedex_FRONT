# Pokedex - FrontEnd
Aplicación FrontEnd para un sistema de visualización y gestión de Pokémon.

## Contenido
- [Sobre el Proyecto](#sobre-el-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Características](#características)
- [Instalación y Configuración](#instalación-y-configuración)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Despliegue](#despliegue)

## Sobre el Proyecto

El objetivo de este proyecto es proporcionar una interfaz de usuario intuitiva para la consulta y gestión de Pokémon en una Pokédex. Este FrontEnd interactúa con una API para mostrar información detallada sobre cada Pokémon, permitiendo buscar, filtrar y visualizar características como el tipo, habilidades y estadísticas.

## Tecnologías Utilizadas

- ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
- ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
- ![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
- ![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Características

- **Interfaz intuitiva:** Diseño responsivo y fácil de usar para consultar y explorar Pokémon.
- **Búsqueda y filtrado:** Encuentra Pokémon por nombre.
- **Visualización de detalles:** Muestra información completa sobre habilidades, tipos y estadísticas base.
- **Integración con API:** Conexión al Backend para obtener información actualizada.

## Instalación y Configuración

### Prerrequisitos

- Node.js y npm instalados en tu sistema. Puedes descargarlos desde [Node.js](https://nodejs.org/).
- API Backend funcionando y accesible.

### Pasos para instalar

1. Clona este repositorio:
   ```bash
   git clone https://github.com/Gravy7w7/Pokedex_FRONT.git
   cd pokedex-frontend
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura las variables de entorno:
   Crea un archivo `.env.local` en la raíz del proyecto y agrega la URL de la API Backend:
   ```env
   VITE_API_URL=http://localhost:3000
   ```

4. Inicia la aplicación:
   ```bash
   npm run dev
   ```
   Esto abrirá la aplicación en `http://localhost:5173` en tu navegador predeterminado.

## Estructura del Proyecto

```plaintext
pokedex_front/
├── node_modules/           # Dependencias del proyecto
├── public/                 # Archivos estáticos
├── src/                    # Código fuente principal
│   ├── assets/            # Recursos como imágenes y fuentes
│   ├── components/        # Componentes reutilizables
│   │   ├── DetailPokemon.jsx
│   │   ├── NavBar.jsx
│   │   ├── Pokemons.jsx
│   │   └── Search.jsx
│   ├── hooks/             # Custom hooks
│   │   └── usePokemon.js
│   ├── styles/            # Archivos CSS
│   │   ├── Detail.css
│   │   ├── NavBar.css
│   │   ├── Pokemons.css
│   │   └── Search.css
│   ├── App.jsx            # Componente principal
│   ├── index.css          # Estilos globales
│   ├── index.js           # Punto de entrada de la aplicación
│   └── main.jsx           # Renderizado principal
├── .env.local              # Configuración de variables de entorno
├── .gitignore              # Archivos y carpetas ignorados por Git
├── eslint.config.js        # Configuración de ESLint
├── index.html              # Archivo HTML principal
├── package.json            # Dependencias y scripts del proyecto
├── package-lock.json       # Versión exacta de dependencias
├── README.md               # Documentación
└── vite.config.js          # Configuración de Vite
```

## Despliegue

El proyecto se encuentra en línea, puede acceder a él a partir del siguiente enlance.
[Pokedex](http://pokedex.zapto.org/)

El enlace debe ser exclusivamente http debido a que no tiene el certificado de SSL
