import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MyreposerviceService {

  repos;
  myName : string = 'githiomi';

  constructor(public _http : HttpClient) { }

  getMyRepos () {
    return this._http.get (`${environment.infoLinkUrl}${this.myName}/repos`);
  }

}
