import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Running app</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input />
        <button>Save</button>
        <div>
          <table>
            <tr>
              <td>Första</td>
            </tr>
            <tr>
              <td>Andra</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
