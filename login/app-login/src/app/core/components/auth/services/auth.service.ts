import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = 'http://localhost:3000';

  constructor(private httpClient:HttpClient) { }

  public sign(payload:{email:string | null | undefined, password:string | null | undefined}):Observable<any>{
    return this.httpClient.post<any>(`${this.url}/sign`, payload).pipe(
      res => res,
      err => err
    )
  }
}


