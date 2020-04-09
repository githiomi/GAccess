import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoextractService {

  constructor(public _http : HttpClient) {}

  private userLinkSource = new Subject<string>();
  _userLink$ = this.userLinkSource.asObservable();
  name : any = "daneden";

  extractRepos( username : any) { 
    // this.userLinkSource.next(username);
    // this.name = username;

    return this._http.get (`${environment.infoLinkUrl}${this.name}/repos`);      
  }
  
}


