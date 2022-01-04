import React, { Component } from 'react'
import Random from "./components/RandomPicker/RandomPicker";
import tachyons from "tachyons";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isClick: false,
    }
  }

  changeFn=()=>{
    this.setState({isClick:!this.state.isClick})
  }
  
  render() {
    return (
      <div className="tac tc">
        <h1>Toss a Coin using Internet <img src="https://img.icons8.com/emoji/48/000000/love-you-gesture-emoji.png" alt="Emoji Icons for the app"/></h1>
        <marquee direction="right">
        <h3>Designed by Thavva Harish</h3>
        </marquee>
        <button onClick={this.changeFn} style={{margin:"10px"}} className="link b black hover-purple shadow-2 bg-animate hover-bg-washed-green">Click Me !!!</button>
        {this.state.isClick ? <Random /> : null }
      </div>
    )
  }
}

export default App;
