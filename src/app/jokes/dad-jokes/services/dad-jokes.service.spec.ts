import { TestBed, inject } from '@angular/core/testing';

import { DadJokesService } from './dad-jokes.service';

describe('DadJokesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DadJokesService]
    });
  });

  it('should be created', inject([DadJokesService], (service: DadJokesService) => {
    expect(service).toBeTruthy();
  }));
});
