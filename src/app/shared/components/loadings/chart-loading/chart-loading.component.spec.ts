import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartLoadingComponent } from './chart-loading.component';

describe('ChartLoadingComponent', () => {
  let component: ChartLoadingComponent;
  let fixture: ComponentFixture<ChartLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
