import React, { Component } from 'react';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App" >
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;