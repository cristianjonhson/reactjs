// Error Boundary
import React, { Component } from 'react';
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    // Puedes registrar el error
  }
  render() {
    if (this.state.hasError) {
      return <h2>Algo salió mal.</h2>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
