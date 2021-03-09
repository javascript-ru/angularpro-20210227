import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class LogService {

  constructor() { }

  ngOnDestroy() {
    console.log('LogService::ngOnDestroy')
  }
}
