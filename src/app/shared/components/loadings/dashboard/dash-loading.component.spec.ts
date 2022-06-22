import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardLoadingComponent } from './dash-loading.component';

describe('DashboardComponent', () => {
  let component: DashboardLoadingComponent;
  let fixture: ComponentFixture<DashboardLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
