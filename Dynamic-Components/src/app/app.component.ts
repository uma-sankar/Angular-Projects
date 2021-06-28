import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { HelperDirective } from './helper.directive';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Dynamic-Components';
  showMessage = false;
  message: string = 'This is using Dynamic Components';
  subscription!: Subscription;
  @ViewChild(HelperDirective, {static: false}) popup!: HelperDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}
  onShow() {
    this.showMessage = true;
    this.showPopup(this.message);
  }
  onClose() {
    this.showMessage = false;
  }
  showPopup(message: string) {
    const popupCmpFactory =
      this.componentFactoryResolver.resolveComponentFactory(PopupComponent);
    const popupContainer = this.popup.viewContainerRef;
    popupContainer.clear();
    const cmpRef = popupContainer.createComponent(popupCmpFactory);
    cmpRef.instance.message = message;
    this.subscription = cmpRef.instance.closePopup.subscribe(() => {
      this.subscription.unsubscribe();
      popupContainer.clear();
    });
  }
}
