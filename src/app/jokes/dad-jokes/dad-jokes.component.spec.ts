import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadJokesComponent } from './dad-jokes.component';

describe('DadJokesComponent', () => {
  let component: DadJokesComponent;
  let fixture: ComponentFixture<DadJokesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadJokesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
