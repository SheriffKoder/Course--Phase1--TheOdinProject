////////////////////////////////////////////////////////////
////component5

//in the video App.js is used to render Counter
//triggering lifecycles

import React, { Component, useState, setState } from 'react';

//component that creates a deliberate error
//accessing a non existent value
//causing crash
//add to render to use
//const ErrorComponent = () => {<div> {props.ignore} </div>}
//this will cause a react error
//will be catched by catching method
//instead of stopping all the app

export class Counter extends React.Component {
    constructor (props) {
      console.log("Constructor"); //1
      super(props);
  
      this.state = {
        counter: 0,
        seed: 0
      }
  
      this.increment = () => this.setState({counter: this.state.counter+1})
      this.decrement = () => this.setState({counter: this.state.counter-1})
    }

    //static: not have access to instance of the object
    //chance to copy any values of props
    //that may be interested in passing over to state
    //error if not return statement
    //anything returned from here get assigned to the state, 
    //not want to change state, return null
    static getDerivedStateFromProps(props, state) {
        //if a seed exists on the props
        //and the seed in out state not equal seed 
        //that we have passed in
        if (props.seed && state.seed !== props.seed) {
            return {
                seed: props.seed,
                counter: props.seed
            } 
        }
        
        return null
    }

  
    //single render call next renders(buttons not use it)
    componentDidMount() {
      console.log("Component Did Mount");
    }

    //let react know rendering should be triggered or not
    //when not changing anything in the ui

    //ignoreProp will call Render and Component 
    //did update because something changed on parent 
    //and that was passed out to component
    //when to not appropriate to call react render

    shouldComponentUpdate(nextProps, nextState) {

        //if there is an ignore props value
        //store in ignore prop
        //&& the one in our state !== our value
        if(nextProps.ignoreProp && 
            this.props.ignoreProp !== nextProps.ignoreProp) {
            console.log("should component Update - Do not render")

            return false
        }
        console.log("should component Update - render")
        return true
    }




    //just before render
    //capture some properties not stored in state
    //before we re-render that component
    //like capture the cursor to use it in componentdid update
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("get snapshot before update")
        return null
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
          <ErrorComponent />
        </div>
      )
    }
  
    //runs on every button click
    componentDidUpdate(prevProps, prevState, snapshot) {
      console.log("Component Did Update")
    }

    //when the component has been taken out of the dom
    //on each counter remove from dom in App.js
    componentWillUnmount() {
        console.log("component will unmount")
    }

    //part of the error boundaries
    //chance to, handle errors
    componentDidCatch(error, info) {
        console.log("Component did catch error")
    }
  
  }
  
  //ReactDOM.render(<Counter />, document.getElementById("rootDiv6"));
  