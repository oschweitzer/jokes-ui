import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {JokesModule} from '../jokes/jokes.module';
import {MatDividerModule, MatExpansionModule, MatListModule, MatMenuModule, MatToolbarModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    JokesModule,
    MatListModule,
    MatDividerModule,
    MatToolbarModule
  ],
  exports: [
    HomeComponent
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
