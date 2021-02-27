import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <a routerLink="lazy">Lazy</a>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'preloading';
}
