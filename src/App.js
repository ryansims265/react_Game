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
  



  clickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if(cards[i].count === 0){
          cards[i].count = cards[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }
//This is a function to be called when the user looses the game and we must reset 
//This checks to see if the current user score is higher than the high score to set them equal to each other and tell the console 
  gameOver = () => { if (this.state.score > this.state.highscore) {
    this.setState({highscore: this.state.score}, function() {
      console.log(this.state.highscore);
    });
  }
  //Then we must reset the card count for each of the cards after the game is over 
  this.state.cards.forEach(card => {
    card.count = 0;
  });
  //Then we alert the user that the game is over and show them their score 
  alert(`Game Over Your score: ${this.state.score}`);
  this.setState({score: 0});
  return true;
}

  render() {
    return (
      <>
      <Header score={this.state.score} highscore={this.state.highscore}>

        </Header>
      <Wrapper>
        

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
      </>
    );
  }
  };


export default App;


