import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Investiments } from '../../models/investiments';

@Injectable({
  providedIn: 'root'
})
export class ListInvestimentsService {

  public url:string = 'https://raw.githubusercontent.com/troquatte/fake-server/main/investiments-all.json';

  constructor(private htpp: HttpClient) { }

  public list():Observable<Array<Investiments>>{
    return this.htpp.get<Array<Investiments>>(this.url).pipe(
      res => res,
      error => error
    );
  }


}
