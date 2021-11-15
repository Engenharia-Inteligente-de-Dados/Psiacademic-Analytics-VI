import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueChartComponent } from './unique-chart.component';

describe('UniqueChartComponent', () => {
  let component: UniqueChartComponent;
  let fixture: ComponentFixture<UniqueChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniqueChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
