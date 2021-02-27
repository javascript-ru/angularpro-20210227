import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <p (click)="clicked.emit(name)">
      hello, {{name}}!
    </p>
    <!-- <ng-content></ng-content> -->
    <slot></slot>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HelloComponent implements OnInit {

  @Input() name?: string;
  @Output() clicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
