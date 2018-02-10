import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {Joke} from '../../models/joke.model';

@Injectable()
export class ChuckJokesService {

  constructor(private http: HttpClient) { }

  getJoke(): Observable<Joke> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<Joke>(`${environment.apiUrl}/chuck-jokes`, {
      headers: headers
     });
  }

}
