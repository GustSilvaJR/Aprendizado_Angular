/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Progress_barComponent } from './progress_bar.component';

describe('Progress_barComponent', () => {
  let component: Progress_barComponent;
  let fixture: ComponentFixture<Progress_barComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Progress_barComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Progress_barComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
