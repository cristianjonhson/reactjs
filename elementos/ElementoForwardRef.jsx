// Componente con forwardRef
import React, { forwardRef } from 'react';
const ElementoForwardRef = forwardRef((props, ref) => (
  <input ref={ref} {...props} />
));
export default ElementoForwardRef;
