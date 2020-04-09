import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MyreposerviceService {

  repos;
  _url : string = 'https://api.github.com/users/';
  myName : string = 'githiomi';

  constructor(public _http : HttpClient) { }

  getMyRepos () {
    return this._http.get (`${this._url}${this.myName}/repos`);
  }

}
