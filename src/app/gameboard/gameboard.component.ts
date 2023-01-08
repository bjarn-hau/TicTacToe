import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss']
})
export class GameboardComponent implements OnInit{

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
  winPositioins: readonly number[][] = [
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

  /**
   * Initializes the gameboard with 9 empty tiles
   * and sets the first player to X
   * 
   */
  constructor() {
    this.gameBoard = Array(9).fill(null)
    this.winner = ""
    this.xIsNextPlayer = true;
    this.draw = false;
  }

  /**
   * Calls the setUpGame() function
   */
  ngOnInit() {
    this.setUpGame();
  }

  /**
   * Sets the gameboard to 9 empty tiles
   * and sets the first player to X
   * 
   */
  setUpGame() {
    this.gameBoard = Array(9).fill(null)
    this.winner = ""
    this.xIsNextPlayer = true;
    this.draw = false;
  }

  /**
   * Returns the current player
   */
  get currentPlayer() {
    return this.xIsNextPlayer ? 'X' : 'O'
  }

  /**
   * Checks if the game is over
   * If not it checks if the tile is already occupied
   * If not it sets the tile to the current player
   * and switches the player
   * then it checks if there is a winner or if the game is a draw
   * 
   * @param index the index of the tile that is picked
   */
  pickTile(index: number): void {

    // directly returns if the game is "over"
    if (this.draw || this.winner) {
      window.alert(`The game has ended ${this.draw ? "in a draw" : `and Player: ${this.winner} won`}! \nTry restrating the game.`)
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

  /**
   * Checks if there is a winner,
   * if so, the winner is set to the winner
   */
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
  /**
   * Checks if all tiles are occupied
   * 
   * @returns true if all tiles are occupied
   */
  fullGameBoard(): boolean {
    return this.gameBoard.find((element) => !element) === undefined
  }

}
