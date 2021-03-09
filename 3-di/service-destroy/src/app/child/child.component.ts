import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-child',
  template: `
    <p>
      child works!
    </p>
  `,
  providers: [LogService]
})
export class ChildComponent implements OnInit {

  
  constructor(log: LogService){

  }

  ngOnInit(): void {
  }

}
