import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ReposModels } from 'src/app/Models/reposModels/repos-models';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RepoextractService {

  _repoStructure : ReposModels;

  constructor(public _http : HttpClient) { 
    this._repoStructure = new ReposModels ("", "", "", new Date());
  }

  extractRepos(){

    interface _userRepos{
      name : any;
      html_url : any;
      description : any;
      created_at : Date;
    }

    this._http.get < _userRepos > (`${environment.infoLinkUrl}/githiomi/repos`). toPromise() .then(
      datum => {
        this._repoStructure.repoName = datum.name;
        this._repoStructure.repoLink = datum.html_url;
        this._repoStructure.repoDescription = datum.description;
        this._repoStructure.repoDateCreated = datum.created_at;
      }
    ) 
  }
}
