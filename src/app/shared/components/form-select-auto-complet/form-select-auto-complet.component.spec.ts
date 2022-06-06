import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormSelectAutoCompletComponent } from './form-select-auto-complet.component';


describe('FormSelectAutoCompletComponent', () => {
  let component: FormSelectAutoCompletComponent;
  let fixture: ComponentFixture<FormSelectAutoCompletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSelectAutoCompletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSelectAutoCompletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
