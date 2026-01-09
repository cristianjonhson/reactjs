// Portal
import React from 'react';
import { createPortal } from 'react-dom';
export default function ElementoPortal() {
  return createPortal(
    <div>Esto es un portal</div>,
    document.body
  );
}
