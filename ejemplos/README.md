# Ejemplos básicos de React

Para probar cada ejemplo en tu app React:

1. Copia el archivo deseado de la carpeta `ejemplos` a tu carpeta `src`.
2. Importa el componente en `src/App.js` o `src/App.jsx`:

```jsx
import EjemploJSX from './ejemplos/01-jsx';
```

3. Usa el componente en el JSX de `App`:

```jsx
function App() {
  return (
    <div>
      <EjemploJSX />
    </div>
  );
}
```

4. Repite el proceso para cada ejemplo cambiando el nombre del componente y el archivo importado.

5. Ejecuta tu app con:
```
npm start
```

Puedes modificar los ejemplos para experimentar y aprender.
