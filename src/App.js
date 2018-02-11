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

  handleClick = () => {
    console.log(this.state.runnerLog);
    console.log(this.currentName.value);
    
    
    this.setState({
      runnerLog: this.state.runnerLog.concat({name:this.currentName.value})
    })
  };

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
        <input type="text" ref={(name) => {this.currentName = name}} />
        <button onClick={this.handleClick}>Save</button>
        <div>
          <table>
            <tbody>
              {this.state.runnerLog.map(log=>{
                return <tr><td>{log.name}</td></tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
