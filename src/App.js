import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'

class App extends Component {
  componentDidMount(){
    document.title = "GDG Workshops"
  }

  render() {
    return (
      <div className="App">
        <Header title="GDG Algiers Workshops" image="https://bit.ly/2RZDFCx"></Header>
        <Content></Content>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
