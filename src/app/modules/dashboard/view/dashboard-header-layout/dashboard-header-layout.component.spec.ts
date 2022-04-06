import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularMaterialModule } from 'src/app/angular-material.module';

import { DashboardHeaderLayoutComponent } from './dashboard-header-layout.component';

describe('DashboardHeaderLayoutComponent', () => {
  let component: DashboardHeaderLayoutComponent;
  let fixture: ComponentFixture<DashboardHeaderLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardHeaderLayoutComponent ],
      imports: [AngularMaterialModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHeaderLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
