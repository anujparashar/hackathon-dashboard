import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeCardFooterComponent } from './challenge-card-footer.component';

describe('ChallengeCardFooterComponent', () => {
  let component: ChallengeCardFooterComponent;
  let fixture: ComponentFixture<ChallengeCardFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeCardFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeCardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
