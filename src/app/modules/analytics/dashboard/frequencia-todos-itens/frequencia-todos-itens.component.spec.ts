import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequenciaTodosItensComponent } from './frequencia-todos-itens.component';

describe('FrequenciaTodosItensComponent', () => {
  let component: FrequenciaTodosItensComponent;
  let fixture: ComponentFixture<FrequenciaTodosItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrequenciaTodosItensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrequenciaTodosItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
