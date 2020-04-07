import { Component, OnInit } from '@angular/core';
import { ExtractGitInfoService } from '../../Services/extract-git-info.service';
import { GitInfoStructure } from '../../Models/git-info-structure'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accesspage',
  templateUrl: './accesspage.component.html',
  styleUrls: ['./accesspage.component.css']
})
export class AccesspageComponent implements OnInit {

  outputStructure : GitInfoStructure;

  receivedUsername : any = '';

  acceptUsername(username : any){
    this.receivedUsername = username;
  }

  constructor(public getInfo : ExtractGitInfoService, public _http : HttpClient) { 
    this.outputStructure = new GitInfoStructure ("", "");
  }

  ngOnInit() {
    interface UserInfoShow {
      username : any;
      name : any;
    }

    let Ahidi = new Promise((resolve, reject) => {
      let 
    })
  }

}
