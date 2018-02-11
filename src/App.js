import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    var data = this.fetchData();

    if (data) {
      this.state = data;
    }
    else {
      this.state = {runnerLog: []};
    }
  }

  handleClick = () => {
    this.setState({
      runnerLog: this.state.runnerLog.concat({name:this.currentName.value})
    });
    this.saveData();
    this.currentName.value = "";

    //console.log(this.currentName.value);
  };

  saveData = ()=> {
    fetch('http://localhost:9999/savedata/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    body: JSON.stringify(this.state.runnerLog)
    })
  }

  fetchData=()=>{
    fetch('http://localhost:9999/savedata/')
      .then(response => {
              return response.json();
      }).catch(error => {
        console.log("Fetch error")        
      }) 
  }

  render() {
    console.log(this.state.runnerLog);
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
