import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'; 

import { ListInvestimentsService } from './list-investiments.service';
import { HttpClient } from '@angular/common/http';
import { Investiments } from '../../models/investiments';

describe('ListInvestimentsService', () => {
  let service: ListInvestimentsService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  let URL:string = 'https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json';

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

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.inject(HttpTestingController);

    service = TestBed.inject(ListInvestimentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('(U) should list all investiments', (done) =>{
    service.list().subscribe((res: Array<Investiments>) => {
      expect(res[0].name).toEqual('Banco teste 1');
      done();
    });
  
    const req = httpTestingController.expectOne(URL); //Testo qual a url eu vou utilizar
    req.flush(mock);

    expect(req.request.method).toEqual('GET'); 
  })
});
