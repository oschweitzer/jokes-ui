import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChuckJokesComponent} from './chuck-jokes/chuck-jokes.component';
import {DadJokesComponent} from './dad-jokes/dad-jokes.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
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
