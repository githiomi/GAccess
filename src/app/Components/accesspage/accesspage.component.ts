import { Component, OnInit } from '@angular/core';
import { ExtractGitInfoService } from '../../Services/extract-git-info.service';
import { GitInfoStructure } from 'src/app/Models/git-info-structure';


@Component({
  selector: 'app-accesspage',
  templateUrl: './accesspage.component.html',
  styleUrls: ['./accesspage.component.css']
})
export class AccesspageComponent implements OnInit {

  userDetails : GitInfoStructure;

  constructor(public _extractInfo : ExtractGitInfoService ){ }
  
  ngOnInit() {
    this._extractInfo.serviceAccept(this._extractInfo.name);
    this.userDetails = this._extractInfo.outputStructure;
  }
  
}
