import React, { Component } from 'react';
import Loadable from 'react-loadable'
import logo from './logo.svg';
import './App.css';

const AsyncComponent = Loadable({
  loader: () => import('./someComponent'),
  loading: () => <div>loading...</div>
});

class App extends Component {
  state = {
    show: 1
  }

  onClick = (e) => {
    e.preventDefault()
    this.setState({
      show: 1
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.onClick}>Show</button>
        {this.state.show &&
          <AsyncComponent />
        }
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
