# Introduccion-ReactJs

# Proyecto: Introducción a React.js

> Ejercicios, ejemplos y estructura base para aprender React.js desde cero usando Vite.

---

## Descripción
Este repositorio contiene un proyecto base y ejemplos prácticos para aprender los fundamentos de React.js, incluyendo componentes, props, estado, eventos, efectos, renderizado condicional, listas, contexto, y patrones avanzados. Incluye una estructura modular, buenas prácticas de accesibilidad, manejo de errores y separación entre componentes presentacionales y contenedores.

## Tecnologías principales
- [React.js](https://react.dev/) 18+
- [Vite](https://vitejs.dev/) (entorno de desarrollo rápido)
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) (calidad y formato de código)
- CSS modularizado

## Estructura del proyecto

```
reactjs/
├── 00--holamundo/         # Proyecto base Hola Mundo React + Vite
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── components/
│   │        ├── mensaje.jsx
│   │        ├── saludo.jsx
│   │        ├── estado-usuario.jsx
│   │        ├── contador-personalizado.jsx
│   │        ├── alerta-personalizada.jsx
│   │        ├── perfiles-container.jsx
│   │        ├── perfil-x.jsx
│   │        └── perfil-x.css
│   └── README.md
├── ejemplos/              # Ejemplos básicos de React
│   ├── 01-jsx.jsx
│   ├── 02-componente.jsx
│   ├── ...
│   └── README.md
├── elementos/             # Ejemplos de todos los tipos de componentes
│   ├── ElementoFuncional.jsx
│   ├── ElementoClase.jsx
│   ├── ElementoFragmento.jsx
│   ├── ElementoPortal.jsx
│   ├── ElementoMemo.jsx
│   ├── ElementoForwardRef.jsx
│   ├── ElementoLazy.jsx
│   └── ElementoErrorBoundary.jsx
├── .eslintrc.json         # Configuración ESLint
├── .prettierrc            # Configuración Prettier
├── package.json           # Scripts y dependencias globales
└── README.md              # Este archivo
```

## Requisitos previos
- Node.js >= 18
- npm >= 9

## Instalación y ejecución
1. Clona el repositorio:
	```bash
	git clone https://github.com/cristianjonhson/reactjs.git
	cd reactjs/00--holamundo
	```
2. Instala las dependencias:
	```bash
	npm install
	```
3. Inicia el servidor de desarrollo:
	```bash
	npm run dev
	```
4. Abre tu navegador en [http://localhost:5173](http://localhost:5173)

## Scripts disponibles
- `npm run dev`     Inicia el servidor de desarrollo
- `npm run build`   Compila la app para producción
- `npm run preview` Previsualiza la app compilada
- `npm run lint`    Ejecuta ESLint y Prettier para revisar y formatear el código

## Configuración de calidad de código
El proyecto incluye ESLint y Prettier preconfigurados. Puedes modificar las reglas en `.eslintrc.json` y `.prettierrc`.

## Ejemplos y ejercicios
- Carpeta `ejemplos/`: Ejercicios básicos de JSX, props, estado, eventos, efectos, renderizado condicional, listas y contexto.
- Carpeta `elementos/`: Ejemplos de todos los tipos de componentes en React (funcional, clase, fragmento, portal, memo, forwardRef, lazy, error boundary).

## Personalización
Puedes crear nuevos componentes en `src/components` y usarlos en `App.jsx`.

## Novedades recientes (enero 2024)
A continuación se listan los principales cambios y mejoras desde la última actualización:
- Refactor: separar componente contenedor `PerfilesContainer` para lógica y renderizado de perfiles
- Fix: ruteo css
- Funcionalidad: botón 'Seguir' ahora cambia de estado y simula acción en `PerfilX`
- Mejora: manejo de errores en imagen y props, y accesibilidad (a11y) en componente `PerfilX`
- Refactor: mover estilos en línea de `App.jsx` a clase CSS `perfil-lista` en `App.css`
- Renombrar archivos de componentes a minúsculas y guiones, y actualizar imports para compatibilidad cross-platform
- Fix: corregir imports de componentes en `App.jsx` para apuntar a la carpeta `components`
- Eliminar archivos de componentes fuera de la carpeta `components` para mantener la estructura limpia
- Refactor: mover todos los componentes a la carpeta `components` y limpiar archivos duplicados
- Integración de Prettier con ESLint y formateo automático de componentes
- Refactor: mover estilos de la fila de nombre y verificado a CSS (`.perfil-x__fila-nombre`) en `PerfilX`
- Refactor: eliminar estilos en línea de `PerfilX` y usar CSS externo
- Fix: actualización de imagen correcta
- Centrar el componente `PerfilX` en la pantalla en `App.jsx`
- Actualizados textos de los botones y alertas en ejemplos de props y funciones como props
- Ejemplo de pasar funciones como props (`ContadorPersonalizado`)
- Ejemplo de props booleanos con `EstadoUsuario`
- Ejemplo de reutilización de componentes con props (`Saludo`)
- Refactor: mover estilos globales y media query a `index.css`, `App.css` solo para componentes
- Separación de estilos principales en `index.css` y estilos de componentes en `App.css`
- Corrección de función App y estilos responsivos
- Agregado README con instrucciones y descripción del proyecto Hola Mundo React + Vite

## Recursos útiles
- [Documentación oficial de React](https://react.dev/)
- [Guía de Vite](https://vitejs.dev/guide/)
- [Guía de ESLint](https://eslint.org/docs/latest/user-guide/getting-started)
- [Guía de Prettier](https://prettier.io/docs/en/index.html)

---
¿Dudas o sugerencias? Abre un issue o contacta al autor.
