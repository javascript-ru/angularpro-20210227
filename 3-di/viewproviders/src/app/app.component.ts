import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <carousel>
      <div *carouselItem>🐌</div>
      <div *carouselItem>🦋</div>
      <div *carouselItem>🐝</div>
      <div *carouselItem>🐠</div>
      <div *carouselItem>🐢</div>
      <div *carouselItem>🦆</div>
    </carousel>
  `
})
export class AppComponent {}
