import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GreetingsRoutingModule } from './greetings-routing.module';
import { GreetingsComponent } from './greetings.component';


@NgModule({
  declarations: [GreetingsComponent],
  imports: [
    CommonModule,
    GreetingsRoutingModule
  ]
})
export class GreetingsModule { }
