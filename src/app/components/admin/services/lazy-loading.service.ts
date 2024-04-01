import {
  ApplicationRef,
  ComponentFactoryResolver,
  ElementRef,
  Injectable,
  Injector,
} from '@angular/core';
import { TabletestComponent } from '../admintable2/tabletest/tabletest.component';

@Injectable({
  providedIn: 'root',
})
export class LazyLoadingService {
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
  ) {}
  loadLazyStandaloneComponent(container: ElementRef) {
    // Create a component factory for LazyStandaloneComponent
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(TabletestComponent);

    // Create a component reference
    const componentRef = componentFactory.create(this.injector);

    // Attach component to the DOM
    this.appRef.attachView(componentRef.hostView);

    // Append the component's DOM element to the body
    container.nativeElement.appendChild(
      (componentRef.hostView as any).rootNodes[0] as HTMLElement
    );

    // You can now use componentRef to interact with the component
    return componentRef;
  }
}
