import { Attribute, Component, Injector, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-child",
  template: ` <p>child works!</p> `,
  styles: [],
})
export class ChildComponent implements OnInit {
  @Input() title2?: string;
  @Input() title3?: string;

  constructor(@Attribute("title") public title: string) {

    console.groupCollapsed("constructor");
    console.log("title", this.title);
    console.log("title2", this.title2);
    console.log("title3", this.title3);
    console.groupEnd();

    setInterval(() => {
      console.groupCollapsed("setInterval");
      console.log("title", this.title);
      console.log("title2", this.title2);
      console.log("title3", this.title3);
      console.groupEnd();
    }, 3000);
  }

  ngOnInit(): void {
    console.groupCollapsed("ngOnInit");
    console.log("title", this.title);
    console.log("title2", this.title2);
    console.log("title3", this.title3);
    console.groupEnd();
  }
}
