import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardBodyLayoutComponent } from './dashboard-body-layout.component';

describe('DashboardBodyLayoutComponent', () => {
  let component: DashboardBodyLayoutComponent;
  let fixture: ComponentFixture<DashboardBodyLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardBodyLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardBodyLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
