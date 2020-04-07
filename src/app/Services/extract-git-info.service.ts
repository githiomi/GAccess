import { Injectable } from '@angular/core';
import { GitInfoStructure } from '../Models/git-info-structure';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ExtractGitInfoService {

  outputStructure : GitInfoStructure;
  prefixUrl : string = 'https://api.github.com/users/';
  suffixUrl : string = 'githiomi';

  // githiomiUrl : string = "https://api.github.com/users/githiomi";

  constructor(public completeUrl : HttpClient) {
    this.outputStructure = new GitInfoStructure("", "", "", "", "", 0, 0);
  }

  getUserArray(){

    interface UserStructure{
      Username : string;
      Name : string;
    }

    let Ahidi = new Promise((resolve, reject) => {
      this.completeUrl.get<UserStructure>(`${this.prefixUrl}${this.suffixUrl}`).toPromise().then(
        datum => {
          this.outputStructure.githubUsername = datum.Username;
          this.outputStructure.githubName = datum.Name;

          resolve()
        },
        err => {
          this.outputStructure.githubUsername = "Cannot be Obtained!";
          this.outputStructure.githubName = "Cannot be Obtained!";

          reject(err);
        })
    })
    return Ahidi;
  }

}

