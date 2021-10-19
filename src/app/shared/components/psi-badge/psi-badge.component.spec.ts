import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsiBadgeComponent } from './psi-badge.component';

describe('PsiBadgeComponent', () => {
  let component: PsiBadgeComponent;
  let fixture: ComponentFixture<PsiBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsiBadgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsiBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
