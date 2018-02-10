import { Component, OnInit } from '@angular/core';
import {DadJokesService} from './services/dad-jokes.service';
import {Joke} from '../models/joke.model';

@Component({
  selector: 'app-dad-jokes',
  templateUrl: './dad-jokes.component.html',
  styleUrls: ['./dad-jokes.component.css']
})
export class DadJokesComponent implements OnInit {

  joke: Joke;

  constructor(private dadJokesService: DadJokesService) {}

  ngOnInit() {
  }

  displayJoke() {
    try {
      this.dadJokesService.getJoke().subscribe((data: any) => this.joke = {
        value: data.data['joke']
      });
    } catch (e) {
      console.error(e);
    }

  }

}
