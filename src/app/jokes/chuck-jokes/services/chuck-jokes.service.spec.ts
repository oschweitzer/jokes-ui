import { TestBed, inject } from '@angular/core/testing';

import { ChuckJokesService } from './chuck-jokes.service';

describe('ChuckJokesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChuckJokesService]
    });
  });

  it('should be created', inject([ChuckJokesService], (service: ChuckJokesService) => {
    expect(service).toBeTruthy();
  }));
});
