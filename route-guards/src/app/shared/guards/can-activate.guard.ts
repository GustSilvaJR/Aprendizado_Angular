import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const [account, password] = [route.queryParams['account'], route.queryParams['password'] ]
      
      if(account === "admin"){
        console.log("login adm efetuado");
      }else{
        console.log("Common user");
      }

      console.log(route);
      console.log(state);

      return true;
  }
  
}
