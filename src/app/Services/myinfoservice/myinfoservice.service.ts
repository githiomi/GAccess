import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Mygit } from '../../Models/mygit/mygit'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MyinfoserviceService {

  myStructure : Mygit;
  suffix : string = "githiomi";

  constructor(public _http : HttpClient) {
      this.myStructure = new Mygit ("", "", "", "", 0, 0, []);
   }

   getMyInfo(){

    interface MyGit{
      avatar_url : any;
      login : string;
      name : string;
      bio : any;
      followers : number;
      following : number;
    }

     this._http.get <MyGit> (`${environment.infoLinkUrl}${this.suffix}`). toPromise().then(
       myData => {
         this.myStructure.myPic = myData.avatar_url;
         this.myStructure.myUsername = myData.login;
         this.myStructure.myName = myData.name;
         this.myStructure.myBio = myData.bio;
         this.myStructure.myFollowers = myData.followers;
         this.myStructure.myFollowing = myData.following; 
       }
     )
   }

//    getRepoArray(){
//      interface getRepoArray{
//        name : [];
//      }

//      this._http.get < getRepoArray> (`${environment.infoLinkUrl}${this.suffix}/repos`).toPromise().then(
//        data => {
//          this.myStructure.myRepos = data.name;
//          console.log(this.getRepoArray.name);
//        }
//      )
//    }
}
