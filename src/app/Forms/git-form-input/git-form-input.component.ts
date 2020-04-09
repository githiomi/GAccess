import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ExtractGitInfoService } from '../../Services/extract-git-info.service'
import { RepoextractService } from 'src/app/Services/repoextractservice/repoextract.service';

@Component({
  selector: 'app-git-form-input',
  templateUrl: './git-form-input.component.html',
  styleUrls: ['./git-form-input.component.css']
})
export class GitFormInputComponent implements OnInit {

  userinfo : string = '';
  constructor(public extractGitInfo : ExtractGitInfoService, public _repoExtract : RepoextractService ) { }

  outputUsername (username : any){
    this.extractGitInfo.serviceAccept(username);
    this._repoExtract.extractRepos(username);
  }

  ngOnInit(): void {
  }

}
