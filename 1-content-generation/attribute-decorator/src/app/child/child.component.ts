import { Attribute, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child works!
    </p>
  `,
  styles: [
  ]
})
export class ChildComponent implements OnInit {

  // @Input() title?: string

  constructor(@Attribute('title') public title: string) { 
    console.log(this.title)
  }

  ngOnInit(): void {
    console.log(this.title)
  }

}
