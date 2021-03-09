import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="show = !show">Toggle Component</button>
    <app-child *ngIf="show"></app-child>
  `,
  styles: []
})
export class AppComponent {
  show = true

}
