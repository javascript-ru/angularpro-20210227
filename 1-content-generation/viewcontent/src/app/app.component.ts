import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <app-item>
      <div>CONTENT</div>
    </app-item> -->

    <button (click)="title = '1'"></button>
    <div>
      {{ 'hello' | reverse}}
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'viewcontent';
}
