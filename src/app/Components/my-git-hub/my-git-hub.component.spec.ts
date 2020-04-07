import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGitHubComponent } from './my-git-hub.component';

describe('MyGitHubComponent', () => {
  let component: MyGitHubComponent;
  let fixture: ComponentFixture<MyGitHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyGitHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyGitHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
