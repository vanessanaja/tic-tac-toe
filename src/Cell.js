import React, { Component } from 'react';

class Cell extends Component{
  static defaultProps = {
    O: "O",
    X: "X"
  }
  constructor(props){
    super(props)
    this.state = {
      content: ""
    }
  }
  render(){
    return (
      <h4>{this.state.content}</h4>
    )
  }
}

export default Cell;