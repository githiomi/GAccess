import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Components/about/about.component';
import { ErrorpageComponent } from './Components/errorpage/errorpage.component';
import { ContactpageComponent } from './Components/contactpage/contactpage.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ErrorpageComponent,
    ContactpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
