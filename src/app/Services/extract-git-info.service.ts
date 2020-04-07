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
    this.outputStructure = new GitInfoStructure ("", "");
  }

  private userLinkSource = new Subject<string>();
  _userLink$ = this.userLinkSource.asObservable();

  serviceAccept (username : any) { 
    this.userLinkSource.next(username);
    this.name = username;

    interface UserDetails{
      login : any;
      name : any;
    }

    setTimeout(() => {
      let Ahidi = new Promise ((resolve, reject) => 
       this.http.get <UserDetails> (`${environment.infoLinkUrl}${this.name}`).toPromise().then(
        datum => {
          this.outputStructure.githubUsername = datum.login;
          this.outputStructure.githubName = datum.name;

          resolve();
        },
        error => {
          this.outputStructure.githubUsername = "Couldn't obtain ^-^";
          this.outputStructure.githubName = "Couldn't obtain ^-^";
      
          reject (error);
        })
     )
    return Ahidi;
       
    }, 10000);
  }
        
   
  ngOnInit(){

  }

}

