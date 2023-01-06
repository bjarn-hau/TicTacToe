import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-playtile',
  templateUrl: './playtile.component.html',
  styleUrls: ['./playtile.component.scss']
})
export class PlaytileComponent {


  @Input() value: 'X' | 'O' | undefined;


}
