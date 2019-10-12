import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Cards from "./components/Cards";
import cards from "./cards.json";


class App extends Component {
  
  state = {
    cards,
    score: 0,
    highscore: 0
  };
  
  
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}></Header>
        {this.state.cards.map(card => (
          <Cards
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
        <Footer />
      </Wrapper>
    );
  }
  };




export default App;


