import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitFormInputComponent } from './git-form-input.component';

describe('GitFormInputComponent', () => {
  let component: GitFormInputComponent;
  let fixture: ComponentFixture<GitFormInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitFormInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
