////////////////////////////////////////////////////////////
////component5

//in the video App.js is used to render Counter
//triggering lifecycles

import React, { Component, useState, setState } from 'react';


export class Counter extends React.Component {
    constructor (props) {
      console.log("Constructor"); //1
      super(props);
  
      this.state = {
        counter: 0
      }
  
      this.increment = () => this.setState({counter: this.state.counter+1})
      this.decrement = () => this.setState({counter: this.state.counter-1})
    }
  
    //single render call next renders(buttons not use it)
    componentDidMount() {
      console.log("Component Did Mount");
    }
  
    render () {
      console.log("Render") //2
  
      return (
        <div>
          <button onClick={this.increment}>
            Increment
          </button>
  
          <button onClick={this.decrement}>
            Decrement
          </button>
  
          <div className="counter">
            Counter: {this.state.counter}
          </div>
        </div>
      )
    }
  
    //runs on every button click
    componentDidUpdate(prevProps, prevState, snapshot) {
      console.log("Component Did Update")
    }
  
  }
  
  //ReactDOM.render(<Counter />, document.getElementById("rootDiv6"));
  