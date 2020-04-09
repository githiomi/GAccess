import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactpageComponent } from './Components/contactpage/contactpage.component';
import { ErrorpageComponent } from './Components/errorpage/errorpage.component';
import { AccesspageComponent } from './Components/accesspage/accesspage.component';
import { MyGitHubComponent } from './Components/my-git-hub/my-git-hub.component';
import { RepopageComponent } from './Components/repopage/repopage/repopage.component';


const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'accesspage', component: AccesspageComponent },
  { path: 'repos', component: RepopageComponent },
  { path: 'about', component: MyGitHubComponent },
  { path: 'contactpage', component: ContactpageComponent },

  { path: '**', component: ErrorpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
