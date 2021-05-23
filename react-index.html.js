import React from 'react';
import ReactDOM from 'react-dom'; 

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
      
        <h1>Welcome to this page!</h1>
        <p>This is where I store my other stuff.</p>
      </div>
    );
  }
}
