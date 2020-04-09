import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Mygit } from '../../Models/mygit/mygit'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MyinfoserviceService {

  myStructure : Mygit;
  prefix : string = 'https://api.github.com/users/';
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

     this._http.get <MyGit> (`${this.prefix}${this.suffix}`). toPromise().then(
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

}
