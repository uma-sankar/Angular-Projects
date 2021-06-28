import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PopupComponent } from './popup/popup.component';
import { HelperDirective } from './helper.directive';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    HelperDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
