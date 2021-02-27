import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div *delay="1000; time: 2000; stop: 2000">Something</div>
    <div *delay="2000">Something</div>
    <div *delay="3000">Something</div>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'structural-directive';
}
