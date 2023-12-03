import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoChartComponent } from './geo-chart.component';

describe('GeoChartComponent', () => {
  let component: GeoChartComponent;
  let fixture: ComponentFixture<GeoChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeoChartComponent]
    });
    fixture = TestBed.createComponent(GeoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
