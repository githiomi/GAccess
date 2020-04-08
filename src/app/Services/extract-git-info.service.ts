import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GitInfoStructure } from '../Models/git-info-structure';
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ExtractGitInfoService {

  outputStructure : GitInfoStructure;
  name : any = '';

  constructor(public http : HttpClient) { 
    this.outputStructure = new GitInfoStructure ("", "", "", "", 0, 0);
  }

  private userLinkSource = new Subject<string>();
  _userLink$ = this.userLinkSource.asObservable();

  serviceAccept (username : any) { 
    this.userLinkSource.next(username);
    this.name = username;

    interface UserDetails{
      avatar_url : any;
      login : any;
      name : any;
      bio : any;
      followers : number;
      following : number;
    }

      let Ahidi = new Promise ((resolve, reject) => 
       this.http.get <UserDetails> (`${environment.infoLinkUrl}${this.name}`).toPromise().then(
        datum => {
          this.outputStructure.githubPicture = datum.avatar_url;
          this.outputStructure.githubUsername = datum.login;
          this.outputStructure.githubName = datum.name;
          this.outputStructure.githubBio = datum.bio;
          this.outputStructure.githubFollowers = datum.followers;
          this.outputStructure.githubFollowing = datum.following;

          resolve();
        },
        error => {
          setTimeout(() => {
            this.outputStructure.githubPicture = "https://www.changefactory.com.au/wp-content/uploads/2010/09/bigstock-Vector-Error-Icon-66246010.jpg";
            this.outputStructure.githubUsername = "Could not be obtained!";
            this.outputStructure.githubName = "Could not be obtained!";
            this.outputStructure.githubBio = "Could not be obtained!";
            this.outputStructure.githubFollowers = 0;
            this.outputStructure.githubFollowing = 0;
      
          }, 10000);
            
          reject (error);
        })
     )
    return Ahidi;
       
  }
        
   
  ngOnInit(){

  }

}

