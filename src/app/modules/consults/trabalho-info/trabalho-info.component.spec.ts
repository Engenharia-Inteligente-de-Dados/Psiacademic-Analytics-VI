import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabalhoInfoComponent } from './trabalho-info.component';

describe('TrabalhoInfoComponent', () => {
  let component: TrabalhoInfoComponent;
  let fixture: ComponentFixture<TrabalhoInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabalhoInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabalhoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
