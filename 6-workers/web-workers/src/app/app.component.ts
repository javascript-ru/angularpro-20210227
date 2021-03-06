import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <button (click)="randomNumber()">random</button>
    {{output1}}
    <button (click)="findBigPrime()">heavy</button>
    {{output2}}
    
  `,
  styles: []
})
export class AppComponent {
  output1:string = '';
  output2:string = '';

  constructor() {}


  randomNumber() {
    this.output1 = Math.random().toString();
  }

  findBigPrime() {
    //this.output2 = find_big_prime().toString();
    const worker = new Worker('./my-worker.worker', { type: 'module'});
    worker.onmessage = ( {data} ) => {
      this.output2 = data;
      worker.terminate();
    }
    worker.postMessage('hello');
  }

}








function find_big_prime() {
  let start = Math.floor(Math.random() * 1000000000);
  let is_prime = false;
  while (!is_prime) {
    is_prime = test_prime(start);
    start++;
  }
  return start;
}

function test_prime(n:number) {
  if (n === 1) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}
