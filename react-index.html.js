import React from 'react';
import ReactDOM from 'react-dom'; 

class CatchError extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h1>Something went wrong</h1>
          <p>Bruno will be here to try to fix the error as soon as possible.</p>
        </div>
      );
    }

    return this.props.children; 
  }
}

class App extends React.Component {
  render() {
    return (
      <CatchError>
        <h1>Welcome to this page!</h1>
        <p>This is where I store my other stuff.</p>
      </CatchError>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
