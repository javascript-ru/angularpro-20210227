import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div colory #c="colory">
      TEXT
    </div>
    <button (click)="c.changeColor('green')"></button>
    <!-- <input (input)="c.changeColor((<EventTarget>$event.target).value)"> -->
  `,
  styles: []
})
export class AppComponent {
  // @ViewChild(ColoryDirective) coloryDirective
  // coloryDirective.changeColor('green')
}
