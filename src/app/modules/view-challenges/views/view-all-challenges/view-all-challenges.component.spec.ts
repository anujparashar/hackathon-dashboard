import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllChallengesComponent } from './view-all-challenges.component';

describe('ViewAllChallengesComponent', () => {
  let component: ViewAllChallengesComponent;
  let fixture: ComponentFixture<ViewAllChallengesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllChallengesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllChallengesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
