# Ejemplos básicos de React

## Cómo probar los ejemplos

1. Copia el archivo deseado de la carpeta `ejemplos` o `elementos` a tu carpeta `src`.
2. Importa el componente en `src/App.js` o `src/App.jsx`:

```jsx
import EjemploJSX from './ejemplos/01-jsx';
import ElementoFuncional from './elementos/ElementoFuncional';
```

3. Usa el componente en el JSX de `App`:

```jsx
function App() {
  return (
    <div>
      <EjemploJSX />
      <ElementoFuncional />
    </div>
  );
}
```

4. Repite el proceso para cada ejemplo cambiando el nombre del componente y el archivo importado.

5. Ejecuta tu app con:
```
npm start
```

## Tipos de componentes en React

En la carpeta `elementos` encontrarás ejemplos de:

- Componente funcional
- Componente de clase
- Fragmento
- Portal
- Memoizado
- ForwardRef
- Lazy loading
- Error Boundary

Puedes modificar los ejemplos para experimentar y aprender.
