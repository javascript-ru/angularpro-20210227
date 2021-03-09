import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-child title="title" [title2]="title2" title3="title3"></app-child>
    
  `,
  styles: []
})
export class AppComponent {
  public title2 = 'title2'

  constructor() {
    setTimeout(() => {
      console.log('change title2 property');
      this.title2 = 'title2-changeProperty'
      console.log('setAttribute');
      document.querySelector('app-child')?.setAttribute('title3','title3-setAttribute')
    }, 3000)
  }

}
