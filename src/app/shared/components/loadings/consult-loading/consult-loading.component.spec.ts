import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultLoadingComponent } from './consult-loading.component';

describe('ConsultLoadingComponent', () => {
  let component: ConsultLoadingComponent;
  let fixture: ComponentFixture<ConsultLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
