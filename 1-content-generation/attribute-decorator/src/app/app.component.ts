import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-child [title]="title"></app-child>
    
  `,
  styles: []
})
export class AppComponent {
  public title = 'Something'

}
