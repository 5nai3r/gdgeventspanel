import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  componentDidMount(){
    document.title = "GDG Workshops";
    fetch('http://localhost:3002/cards')
    .then(response => response.json())
    .then(data => this.setState({ cards: data }));
  }

  render() {
    const { cards } = this.state;
    return (
      <div className="App">
        <Header title="GDG Algiers Workshops" image="https://bit.ly/2RZDFCx"></Header>
        <Content cards={cards}></Content>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
