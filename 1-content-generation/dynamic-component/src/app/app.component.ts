import { Component, ComponentFactoryResolver, Injector, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `

  
  <ng-container *ngComponentOutlet="dynamicComponent">

  </ng-container>

  <button (click)="load()">LOAD</button>
    
  `,
  styles: []
})
export class AppComponent {

  dynamicComponent: any = null

  constructor(
    viewContainer: ViewContainerRef,
    cfr: ComponentFactoryResolver,
    injector: Injector
  ) {

    // this.dynamicComponent

    // setTimeout(() => {
    //   this.dynamicComponent = Banner2Component
    // }, 3000);

    // setTimeout(() => {
    //   this.dynamicComponent = Banner3Component
    // }, 6000);

    // @ViewChild( StrictualDirective) host
    // host.viewContainer

    // const BannerComponentFactory = cfr.resolveComponentFactory(BannerComponent);
    // const bannerComponent = viewContainer.createComponent(BannerComponentFactory);
    // viewContainer.remove()
  }

  async load() {
    const { BannerComponent } = await import('./banner/banner.component');    
    this.dynamicComponent = BannerComponent;
  }
}
