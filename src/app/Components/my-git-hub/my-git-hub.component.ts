import { Component, OnInit } from '@angular/core';
import { MyinfoserviceService } from '../../Services/myinfoservice/myinfoservice.service';
import { Mygit } from '../../Models/mygit/mygit'
import { MyreposerviceService } from 'src/app/Services/myreposervice/myreposervice.service';

@Component({
  selector: 'app-my-git-hub',
  templateUrl: './my-git-hub.component.html',
  styleUrls: ['./my-git-hub.component.css']
})
export class MyGitHubComponent implements OnInit {

  repos;
  _mygit : Mygit;
  _myrepos : Mygit;
  repoLength : number;

  constructor(public mygitservice : MyinfoserviceService, public _myrepositories : MyreposerviceService) { }

  displayDetails(index){
    this.repos[index].showRepoDetails = !this.repos[index].showRepoDetails;
  }

  ngOnInit(){
    this.mygitservice.getMyInfo();
    this._mygit = this.mygitservice.myStructure;

    this._myrepositories.getMyRepos().subscribe(
      datum => {
        this.repos = datum;
        this.repoLength = this.repos.length;
        console.log(datum)
      }
    )
  }

}
