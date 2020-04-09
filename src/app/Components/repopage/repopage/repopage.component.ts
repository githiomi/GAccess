import { Component, OnInit } from '@angular/core';
import { RepoextractService } from '../../../Services/repoextractservice/repoextract.service';

@Component({
  selector: 'app-repopage',
  templateUrl: './repopage.component.html',
  styleUrls: ['./repopage.component.css']
})
export class RepopageComponent implements OnInit {

  repos;
  repoLength : number;
  username : any;

  constructor(public repoextraction : RepoextractService) { }

  displayDetails(index){
    this.repos[index].showRepoDetails = !this.repos[index].showRepoDetails;
  }

  showRepos(){
    this.username = this.repoextraction.name;
      this.repoextraction.extractRepos(this.username).subscribe(
        datum => {
          this.repos = datum
          this.repoLength = this.repos.length;
        }
      )
    }

  ngOnInit() {
  }

}
