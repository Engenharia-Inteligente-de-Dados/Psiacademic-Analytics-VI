import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultsFormComponent } from './consults-form.component';

describe('ConsultsFormComponent', () => {
  let component: ConsultsFormComponent;
  let fixture: ComponentFixture<ConsultsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
