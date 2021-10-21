import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphAccordionComponent } from './paragraph-accordion.component';

describe('ParagraphAccordionComponent', () => {
  let component: ParagraphAccordionComponent;
  let fixture: ComponentFixture<ParagraphAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParagraphAccordionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParagraphAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
