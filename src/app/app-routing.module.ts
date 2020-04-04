import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { ContactpageComponent } from './Components/contactpage/contactpage.component';
import { ErrorpageComponent } from './Components/errorpage/errorpage.component';
import { AccesspageComponent } from './Components/accesspage/accesspage.component';


const routes: Routes = [
  { path: '', redirectTo: '/accesspage', pathMatch: 'full'},
  { path: 'accesspage', component: AccesspageComponent},
  { path: 'about', component: AboutComponent },
  { path: 'contactpage', component: ContactpageComponent },

  { path: '**', component: ErrorpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
