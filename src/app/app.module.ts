import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {JokesModule} from './jokes/jokes.module';
import {HomeModule} from './home/home.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DadJokesService} from './jokes/dad-jokes/services/dad-jokes.service';
import {ChuckJokesService} from './jokes/chuck-jokes/services/chuck-jokes.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    JokesModule,
    HomeModule,
    BrowserAnimationsModule
  ],
  providers: [
    DadJokesService,
    ChuckJokesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
