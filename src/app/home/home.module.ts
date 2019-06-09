import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {JokesModule} from '../jokes/jokes.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

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
