import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsiChartComponent } from './psi-chart.component';

describe('PsiChartComponent', () => {
  let component: PsiChartComponent;
  let fixture: ComponentFixture<PsiChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsiChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsiChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
