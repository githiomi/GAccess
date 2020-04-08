import { Component, OnInit } from '@angular/core';
import { MyinfoserviceService } from '../../Services/myinfoservice/myinfoservice.service';
import { Mygit } from '../../Models/mygit/mygit'

@Component({
  selector: 'app-my-git-hub',
  templateUrl: './my-git-hub.component.html',
  styleUrls: ['./my-git-hub.component.css']
})
export class MyGitHubComponent implements OnInit {

  _mygit : Mygit;
  _myrepos : Mygit;

  constructor(public mygitservice : MyinfoserviceService) { }

  ngOnInit(){
    this.mygitservice.getMyInfo();
    this._mygit = this.mygitservice.myStructure;

    // this.mygitservice.getRepoArray();
    // this._myrepos = this.mygitservice.myStructure;
    // console.log(this._myrepos);
  }

}
