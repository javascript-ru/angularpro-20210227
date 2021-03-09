import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GreetingsComponent } from './greetings.component';

const routes: Routes = [{ path: '', component: GreetingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GreetingsRoutingModule { }
