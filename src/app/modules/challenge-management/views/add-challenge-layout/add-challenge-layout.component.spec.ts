import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChallengeLayoutComponent } from './add-challenge-layout.component';

describe('AddChallengeLayoutComponent', () => {
  let component: AddChallengeLayoutComponent;
  let fixture: ComponentFixture<AddChallengeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChallengeLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChallengeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
