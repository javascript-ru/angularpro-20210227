import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { myAnimation1 } from './animations/1';
import { myAnimation2 } from './animations/2';
import { myAnimation3 } from './animations/3';

@Component({
  selector: "app-root",
  template: `
    <app-nav-bar></app-nav-bar>
    <!-- <main [@myAnimation]="getRouterOutletState(o)"> -->
    <main>
      <router-outlet #o="outlet"></router-outlet>
    </main>
  `,
  styleUrls: ["./app.component.scss"],
  // animations: [myAnimation1]
})
export class AppComponent {
  public getRouterOutletState(outlet: RouterOutlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
