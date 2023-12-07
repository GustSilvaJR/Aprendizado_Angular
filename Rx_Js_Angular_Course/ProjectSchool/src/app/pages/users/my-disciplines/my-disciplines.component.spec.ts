import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDisciplinesComponent } from './my-disciplines.component';

describe('MyDisciplinesComponent', () => {
  let component: MyDisciplinesComponent;
  let fixture: ComponentFixture<MyDisciplinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDisciplinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDisciplinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
