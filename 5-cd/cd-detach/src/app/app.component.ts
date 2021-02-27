import { ApplicationRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    {{title}}   
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 0;

  constructor(ngZone: NgZone, app: ApplicationRef, cd: ChangeDetectorRef) {
    this.title = Math.random();

    setInterval(() => {
      this.title = Math.random();
    }, 10);

    setInterval(() => {
      // app.tick();
      // cd.markForCheck();
      cd.detectChanges();
    }, 100);

  }
}
