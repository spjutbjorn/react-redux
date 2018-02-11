import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      runnerLog:[{
        name: "Hugo"
      }]
    }
  }

  handleClick= (e,data)=>{
    console.log(data, this.rel.name)
  }

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
        <input rel='name' id='name'/>
        <button onclick={this.handleClick}>Save</button>
        <div>
          <table>
            {this.state.runnerLog.map(log=>{
              return <tr><td>{log.name}</td></tr>
            })}
          </table>
        </div>
      </div>
    );
  }
}

export default App;
