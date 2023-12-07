import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyConquestsComponent } from './my-conquests.component';

describe('MyConquestsComponent', () => {
  let component: MyConquestsComponent;
  let fixture: ComponentFixture<MyConquestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyConquestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyConquestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
