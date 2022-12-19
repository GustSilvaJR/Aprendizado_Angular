import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AulasIniciaisComponent } from './aulas-iniciais.component';

describe('AulasIniciaisComponent', () => {
  let component: AulasIniciaisComponent;
  let fixture: ComponentFixture<AulasIniciaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AulasIniciaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AulasIniciaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
