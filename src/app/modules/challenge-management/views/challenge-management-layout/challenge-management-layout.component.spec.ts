import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeManagementLayoutComponent } from './challenge-management-layout.component';

describe('ChallengeManagementLayoutComponent', () => {
  let component: ChallengeManagementLayoutComponent;
  let fixture: ComponentFixture<ChallengeManagementLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeManagementLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeManagementLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
