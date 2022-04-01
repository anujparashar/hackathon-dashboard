import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeCardLayoutComponent } from './challenge-card-layout.component';

describe('ChallengeCardLayoutComponent', () => {
  let component: ChallengeCardLayoutComponent;
  let fixture: ComponentFixture<ChallengeCardLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeCardLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeCardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
