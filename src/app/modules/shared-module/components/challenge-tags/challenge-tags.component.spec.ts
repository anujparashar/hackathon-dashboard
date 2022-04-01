import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeTagsComponent } from './challenge-tags.component';

describe('ChallengeTagsComponent', () => {
  let component: ChallengeTagsComponent;
  let fixture: ComponentFixture<ChallengeTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
