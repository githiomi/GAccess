import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-git-form-input',
  templateUrl: './git-form-input.component.html',
  styleUrls: ['./git-form-input.component.css']
})
export class GitFormInputComponent implements OnInit {

  userinfo : any = "";

  @Output() submitGithubUsername = new EventEmitter <any>();

  outputUsername(username : any){
    this.submitGithubUsername.emit(username);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
