import { AfterContentInit, AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { MyDirective } from '../my.directive';

@Component({
  selector: 'app-item',
  template: `
    <p #h>
      VIEW
      <!-- <ng-content></ng-content> -->
    </p>
    <app-child appMy></app-child>
  `,
  styles: [
  ]
})
export class ItemComponent implements OnInit, AfterViewInit, AfterContentInit {

  // @ContentChild() el
  // @ContentChildren()
  //@ViewChildren('', {} ) elements ?: QueryList<Element>

  // @ViewChildren('h') elements ?: QueryList<Element>
  // @ViewChildren(ChildComponent) elements ?: QueryList<Element>
  @ViewChildren(MyDirective, {read: ChildComponent }) elements ?: QueryList<ChildComponent>

  constructor() { }

  ngOnInit(): void {
    //console.log('ngOnInit')
  }

  ngAfterViewInit(): void {
    //console.log('ngAfterViewInit')
    console.log(this.elements?.toArray())
  }

  ngAfterContentInit(): void {
    //console.log('ngAfterContentInit')
  }


}
