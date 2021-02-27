import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SwPush, SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  template: `
    Test
    
  `,
  styles: []
})
export class AppComponent {
  constructor(swUpdate: SwUpdate, snackbar: MatSnackBar, swPush:SwPush) {
    // swUpdate.checkForUpdate()
    swUpdate.available.subscribe(event => {
      const snack = snackbar.open("New version of application is ready", "Reload");
      snack.onAction().subscribe(() => {
        swUpdate.activateUpdate().then(() => document.location.reload());
      });
    });

    swPush.messages.subscribe(message => {
      console.log(message);
    });

    // const serverPublicKey = ''
    // swPush.requestSubscription( { serverPublicKey } ).then(pushSubscription => {
    //   console.log(pushSubscription.toJSON());
    // })

  }
}
