import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPublicoComponent } from './dashboard-publico.component';

describe('DashboardPublicoComponent', () => {
  let component: DashboardPublicoComponent;
  let fixture: ComponentFixture<DashboardPublicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardPublicoComponent]
    });
    fixture = TestBed.createComponent(DashboardPublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
