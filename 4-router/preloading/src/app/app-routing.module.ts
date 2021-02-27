import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MypreloadingService } from './mypreloading.service';

const routes: Routes = [
  { path: 'lazy', 
    data: {
      nopreload: true
    },
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) 
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: MypreloadingService})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
