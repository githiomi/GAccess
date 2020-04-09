import { Component, OnInit, Input } from '@angular/core';
import { ReposModels } from 'src/app/Models/reposModels/repos-models';

@Component({
  selector: 'app-repodetails',
  templateUrl: './repodetails.component.html',
  styleUrls: ['./repodetails.component.css']
})
export class RepodetailsComponent implements OnInit {

  @Input() public repoDetails : any;

  constructor() {   }

  ngOnInit(): void {
  }

}
