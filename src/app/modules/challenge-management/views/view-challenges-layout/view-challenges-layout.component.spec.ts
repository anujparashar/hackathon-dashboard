import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChallengesLayoutComponent } from './view-challenges-layout.component';

describe('ViewChallengesLayoutComponent', () => {
  let component: ViewChallengesLayoutComponent;
  let fixture: ComponentFixture<ViewChallengesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChallengesLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChallengesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
