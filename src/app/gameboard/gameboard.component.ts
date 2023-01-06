import { Component } from '@angular/core';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss']
})
export class GameboardComponent {

  /**
   *    |   |   
   *  0 | 1 | 2
   * ___|___|___
   *    |   |   
   *  3 | 4 | 5
   * ___|___|___
   *    |   |
   *  6 | 7 | 8
   *    |   |
   */
  winPositioins = [
    // hoizontal winner
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // vertical winner
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonal winner
    [0, 4, 8],
    [2, 4, 6]
  ]

  gameBoard: any[]
  winner: string
  draw: boolean
  xIsNextPlayer: boolean

  constructor() {
    this.gameBoard = Array(9).fill(null)
    this.winner = ""
    this.xIsNextPlayer = true;
    this.draw = false;
  }

  ngOnInit() {
    this.setUpGame();
  }

  setUpGame() {
    this.gameBoard = Array(9).fill(null)
    this.winner = ""
    this.xIsNextPlayer = true;
    this.draw = false;
  }

  get currentPlayer() {
    return this.xIsNextPlayer ? 'X' : 'O'
  }

  pickTile(index: number) {

    // directly returns if the game is "over"
    if (this.draw || this.winner) {
      return;
    }

    if (!this.gameBoard[index]) {
      this.gameBoard[index] = this.currentPlayer;
      this.xIsNextPlayer = !this.xIsNextPlayer
    }

    this.checkForWinner();

    if (this.fullGameBoard() && !this.winner) {
      this.draw = true
    }

  }

  checkForWinner() {

    for (const iterator of this.winPositioins) {
      const [firstTile, secondTile, thirdTile] = iterator;
      if ( // checks if all three Tiles are occupied by the same player
        this.gameBoard[firstTile] &&
        this.gameBoard[firstTile] === this.gameBoard[secondTile] &&
        this.gameBoard[firstTile] === this.gameBoard[thirdTile]
      ) {
        this.winner = this.gameBoard[firstTile];
      }
    }
  }

  fullGameBoard(): boolean {
    return this.gameBoard.find((element) => !element) === undefined
  }

}
