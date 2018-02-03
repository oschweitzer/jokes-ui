import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuckJokesComponent } from './chuck-jokes.component';

describe('ChuckJokesComponent', () => {
  let component: ChuckJokesComponent;
  let fixture: ComponentFixture<ChuckJokesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuckJokesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuckJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
