import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteChallengesLayoutComponent } from './delete-challenges-layout.component';

describe('DeleteChallengesLayoutComponent', () => {
  let component: DeleteChallengesLayoutComponent;
  let fixture: ComponentFixture<DeleteChallengesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteChallengesLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteChallengesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
