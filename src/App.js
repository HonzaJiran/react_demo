import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Miners from './components/miners.js';
import Cards from './components/cards.js';
import Form from './components/form'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      show_miners: false,
      show_cards: false
    }

    this.handleMiners = this.handleMiners.bind(this);
    this.handleCards = this.handleCards.bind(this);
  }

  handleMiners(){
    this.setState({show_cards: false, show_miners: true})
  }

  handleCards(){
    this.setState({show_miners: false, show_cards: true})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <br />
        <Form />
        <br />
        <button onClick={this.handleMiners}> Miner Status </button>
        <button onClick={this.handleCards}> Graphic card Status </button>
        <br />
        { this.state.show_miners && <Miners /> }
        { this.state.show_cards && <Cards /> }
      </div>
    );
  }
}

export default App;
