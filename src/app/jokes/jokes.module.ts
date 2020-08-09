import {HttpClientModule} from '@angular/common/http';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ChuckJokesComponent } from "./chuck-jokes/chuck-jokes.component";
import { DadJokesComponent } from "./dad-jokes/dad-jokes.component";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  exports: [DadJokesComponent, ChuckJokesComponent],
  declarations: [ChuckJokesComponent, DadJokesComponent],
})
export class JokesModule {}
