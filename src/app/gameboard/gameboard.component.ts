import { Component } from '@angular/core';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss']
})
export class GameboardComponent {

  gameBoard: any[]
  winner: string
  xIsNextPlayer: boolean

  constructor() {
    this.gameBoard = Array(9).fill(null)
    this.winner = ""
    this.xIsNextPlayer = true;
  }

}
