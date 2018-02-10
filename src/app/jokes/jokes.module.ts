import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChuckJokesComponent} from './chuck-jokes/chuck-jokes.component';
import {DadJokesComponent} from './dad-jokes/dad-jokes.component';
import {MatButtonModule, MatCardModule, MatExpansionModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {AngularFontAwesomeModule} from 'angular-font-awesome';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    AngularFontAwesomeModule,
    HttpClientModule
  ],
  exports: [
    DadJokesComponent,
    ChuckJokesComponent
  ],
  declarations: [ChuckJokesComponent, DadJokesComponent]
})
export class JokesModule { }
