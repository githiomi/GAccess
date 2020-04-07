import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { AboutComponent } from './Components/about/about.component';
import { ErrorpageComponent } from './Components/errorpage/errorpage.component';
import { ContactpageComponent } from './Components/contactpage/contactpage.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { AccesspageComponent } from './Components/accesspage/accesspage.component';
import { GitFormInputComponent } from './Forms/git-form-input/git-form-input.component';
import { MyGitHubComponent } from './Components/my-git-hub/my-git-hub.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ErrorpageComponent,
    ContactpageComponent,
    NavigationComponent,
    AccesspageComponent,
    GitFormInputComponent,
    MyGitHubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
