import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaytileComponent } from './playtile/playtile.component';
import { GameboardComponent } from './gameboard/gameboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaytileComponent,
    GameboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
