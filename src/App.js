// src/App.js
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// import Quote from "./Quote";
import Quotes from "./Quotes";
import Lamp from "./Lamp";

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {
    working: true
    };
  }
  handleClick = () => {
    this.setState({ working: !this.state.working });
  } 

  render() {
    const bart = this.state.working ? 'On' : 'Off';

  let changeLogo= 'App-logo2';
  if (this.state.working){
    changeLogo = 'App-logo';
  }
    return (
      <div className="App">
        <header className="App-header">
          
          <img src={logo} className={changeLogo} alt="logo" />
          {/* <h1 className="App-title">Simpsons Quotes</h1> */}

          <button
          className={bart}
          onClick={
            this.handleClick
          }>
          
          {bart.toUpperCase()}
        </button>
        <h1>Simpsons Quotes</h1>
        </header>
        
        <Lamp on />
        <Lamp />
        <Quotes />
        
      </div>
    );
  }
}

export default App;
