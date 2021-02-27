import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { HelloComponent } from './hello/hello.component';


@NgModule({
  declarations: [
  HelloComponent],
  imports: [
    BrowserModule
  ]
})
export class AppModule { 

  ngDoBootstrap() {}

  constructor(injector: Injector) {
    const helloElement = createCustomElement(HelloComponent, { injector });
    customElements.define('my-hello', helloElement);
  }
}
