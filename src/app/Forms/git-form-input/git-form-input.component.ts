import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ExtractGitInfoService } from '../../Services/extract-git-info.service'

@Component({
  selector: 'app-git-form-input',
  templateUrl: './git-form-input.component.html',
  styleUrls: ['./git-form-input.component.css']
})
export class GitFormInputComponent implements OnInit {

  userinfo : string = '';
  constructor(public extractGitInfo : ExtractGitInfoService) { }

  outputUsername (username : any){
    this.extractGitInfo.serviceAccept(username);
  }

  ngOnInit(): void {
  }

}
