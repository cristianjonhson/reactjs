# Proyecto 00--holamundo

# Proyecto base: Hola Mundo React + Vite

> Ejemplo inicial para aprender React.js con Vite, componentes, props, estado, eventos y buenas prácticas.

---

## Descripción
Este proyecto es una plantilla base para comenzar a trabajar con React.js usando Vite. Incluye ejemplos de componentes funcionales, props, estado, eventos, renderizado condicional, manejo de errores y estilos con CSS modularizado. Ideal para quienes quieren aprender React desde cero o crear prototipos rápidos.

## Tecnologías utilizadas
- [React.js](https://react.dev/) 18+
- [Vite](https://vitejs.dev/) (entorno de desarrollo rápido)
- CSS modularizado

## Estructura del proyecto
```
00--holamundo/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── components/
│        ├── mensaje.jsx
│        ├── saludo.jsx
│        ├── estado-usuario.jsx
│        ├── contador-personalizado.jsx
│        ├── alerta-personalizada.jsx
│        ├── perfiles-container.jsx
│        ├── perfil-x.jsx
│        └── perfil-x.css
└── README.md
```

## Instalación y ejecución
1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
3. Abre tu navegador en [http://localhost:5173](http://localhost:5173)

## Personalización
Puedes crear nuevos componentes en `src/components` y usarlos en `App.jsx`.

## Ejemplos incluidos
- `App.jsx`: Componente principal que integra todos los ejemplos.
- `Mensaje.jsx`: Muestra un mensaje personalizado.
- `Saludo.jsx`: Recibe un nombre por props y lo muestra.
- `EstadoUsuario.jsx`: Ejemplo de props booleanos y renderizado condicional.
- `ContadorPersonalizado.jsx`: Ejemplo de función pasada como prop.
- `AlertaPersonalizada.jsx`: Botón que dispara una alerta personalizada.
- `PerfilesContainer.jsx` y `PerfilX.jsx`: Ejemplo avanzado de renderizado de lista, manejo de estado local, accesibilidad y manejo de errores en imágenes.

## Buenas prácticas
- Componentes funcionales y reutilizables.
- Separación de lógica y presentación.
- Accesibilidad (roles, aria-label, aria-pressed).
- Manejo de errores en imágenes y props.
- Estilos en CSS modularizado.

## Recursos útiles
- [Documentación oficial de React](https://react.dev/)
- [Guía de Vite](https://vitejs.dev/guide/)

---
¿Dudas o sugerencias? Abre un issue o contacta al autor.
