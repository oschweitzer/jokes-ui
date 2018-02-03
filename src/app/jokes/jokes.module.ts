import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChuckJokesComponent} from './chuck-jokes/chuck-jokes.component';
import {DadJokesComponent} from './dad-jokes/dad-jokes.component';
import {MatButtonModule, MatExpansionModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatExpansionModule
  ],
  exports: [
    DadJokesComponent,
    ChuckJokesComponent
  ],
  declarations: [ChuckJokesComponent, DadJokesComponent]
})
export class JokesModule { }
