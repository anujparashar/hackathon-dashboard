import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengesLayoutComponent } from './challenges-layout.component';

describe('ChallengesLayoutComponent', () => {
  let component: ChallengesLayoutComponent;
  let fixture: ComponentFixture<ChallengesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengesLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
