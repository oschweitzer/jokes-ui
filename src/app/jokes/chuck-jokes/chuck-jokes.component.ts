import {Component, OnInit} from '@angular/core';
import {ChuckJokesService} from './services/chuck-jokes.service';
import {Joke} from '../models/joke.model';

@Component({
  selector: 'app-chuck-jokes',
  templateUrl: './chuck-jokes.component.html',
  styleUrls: ['./chuck-jokes.component.css']
})
export class ChuckJokesComponent implements OnInit {

  joke: Joke;

  constructor(private chuckJokesService: ChuckJokesService) {}

  ngOnInit() {}

  displayJoke() {
    try {
      this.chuckJokesService.getJoke().subscribe((data: any) => this.joke = {
        value: data.data['value']
      });
    } catch (e) {
      console.error(e);
    }

  }

}
