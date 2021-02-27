import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ChildComponent } from './child/child.component';
import { MyDirective } from './my.directive';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ChildComponent,
    MyDirective,
    ReversePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
