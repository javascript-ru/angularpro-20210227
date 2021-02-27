import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <app-animals>
    <cat></cat>
    <dog></dog>
    <rock></rock>
    <fox></fox>
    <p>just an element</p>
   </app-animals>    
  `,
  styles: []
})
export class AppComponent {

}
