import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'; 

import { ListComponent } from './list.component';
import { Investiments } from '../../models/investiments';
import { ListInvestimentsService } from '../services/list-investiments.service';
import { of } from 'rxjs';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let service: ListInvestimentsService;

  let mock:Array<Investiments> = [
    {
      name: 'Banco teste 1',
      value: 40
    },
    {
      name: 'Banco teste 2',
      value: 50
    },
    {
      name: 'Banco teste 3',
      value: 60
    },
    {
      name: 'Banco teste 4',
      value: 70
    },
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    service = TestBed.inject(ListInvestimentsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('U Will list all the investiments'), ()=>{
    let investiments = component.investimentos;
    spyOn(service, 'list').and.returnValue(of(mock)); //Realizando o mock 

    component.ngOnInit();
    fixture.detectChanges();

    expect(service.list).toHaveBeenCalledWith();
  }
  
});
