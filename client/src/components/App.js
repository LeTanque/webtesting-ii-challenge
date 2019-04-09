import React, { Component } from 'react';
import logo from '../assets/logo.svg';

import Display from './Display'
import Dashboard from './Dashboard'


class App extends Component {
  state = {
    balls: 0,
    strikes: 0,
    strikeout: false,
    walk: false
  }

  hitBall = () => {
    if (this.state.balls === 3) {
      return this.setState({
        ...this.state,
        balls: 0,
        strikeout: false,
        walk: true,
      })
    }
    this.setState({
      ...this.state,
      balls: this.state.balls + 1,
      strikeout: false,
      walk: false,
    })
  }

  hitStrike = () => {
    if (this.state.strikes === 2) {
      return this.setState({
        ...this.state,
        strikes: 0,
        strikeout: true,
        walk: false
      })
    }
    this.setState({
      ...this.state,
      strikes: this.state.strikes + 1,
      strikeout: false,
      walk: false,
    })
  }



  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h3>Hello!</h3>
            <Dashboard hitBall={this.hitBall} hitStrike={this.hitStrike} />
            <Display 
              balls={this.state.balls} 
              strikes={this.state.strikes} 
              walk={this.state.walk} 
              strikeout={this.state.strikeout} 
            />
          </header>
        </div>
      </>
    );
  }
}


export default App;

