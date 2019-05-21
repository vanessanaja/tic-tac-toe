import React, { Component } from 'react';
import Cell from './Cell';
import './Board.css';

class Board extends Component{
  static defaultProps = {
    nRows: 3,
    nCols: 3,
    // startingCell: "",
    X: "X",
    O: "O"
  }
  constructor(props){
    super(props);
    this.state = {
      hasWon: false,
      // board: this.createBoard();
    };
  }
  // createBoard(){
  //   let Board = [],
  //   for(let y = 0; y < this.props.nRows; y++){
  //     let row = [],
  //     for(let x = 0; x < this.props.nCols; x++){
  //       row.push()
  //     }
  //   }
  // }
  render(){
    return(
      <div className="Board">
      <h1>Tic Tac Toe</h1>
        <div className="table">
        <table align="center">
          <tr>
            <td><Cell /></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </div>
      </div>
    )
  }
}

export default Board;