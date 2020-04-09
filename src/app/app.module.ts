import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';

import { AppComponent } from './app.component';
import { AboutComponent } from './Components/about/about.component';
import { ErrorpageComponent } from './Components/errorpage/errorpage.component';
import { ContactpageComponent } from './Components/contactpage/contactpage.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { AccesspageComponent } from './Components/accesspage/accesspage.component';
import { GitFormInputComponent } from './Forms/git-form-input/git-form-input.component';
import { MyGitHubComponent } from './Components/my-git-hub/my-git-hub.component';
import { RepopageComponent } from './Components/repopage/repopage/repopage.component';
import { RepodetailsComponent } from './Components/repodetails/repodetails/repodetails.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ErrorpageComponent,
    ContactpageComponent,
    NavigationComponent,
    AccesspageComponent,
    GitFormInputComponent,
    MyGitHubComponent,
    RepopageComponent,
    RepodetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
