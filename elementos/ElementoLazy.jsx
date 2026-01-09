// Componente lazy
import React, { Suspense, lazy } from 'react';
const LazyComponent = lazy(() => import('./ElementoFuncional'));
export default function ElementoLazy() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
