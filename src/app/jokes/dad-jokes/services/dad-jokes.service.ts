import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Joke} from '../../models/joke.model';

@Injectable()
export class DadJokesService {

  constructor(private http: HttpClient) { }

  getJoke(): Observable<Joke> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get<Joke>(`${environment.apiUrl}/dad-jokes`, {
      headers: headers
    });
  }

}
