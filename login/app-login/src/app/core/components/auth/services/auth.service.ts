import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient, private router:Router, private jwt:JwtHelperService) { }

  public sign(payload: { email: string | null | undefined, password: string | null | undefined }): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/sign`, payload).pipe(
      map((res) => {
        console.log(res.token);
        localStorage.removeItem('access_token');
        localStorage.setItem('access_token', res.token);
        return this.router.navigate(['admin']);
      }),

      catchError((e) => {
        if (e.error.message) throw new Error(e.error.message);
        throw new Error("Servidor fora do ar no momento");

      })
    );
  };

  public logout(){
    localStorage.removeItem('access_token');
    return this.router.navigate(['']);
  }

  public isAuthenticated():boolean{
    const token = localStorage.getItem('access_token');
    
    if(!token) return false;

    return !this.jwt.isTokenExpired(token);
    
  }
}


