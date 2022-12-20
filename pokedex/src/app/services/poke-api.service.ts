
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Observable
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url: string = "https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20"

  constructor(private httpClient:HttpClient) { }


  public getAllPokemons():Observable<any>{
    return this.httpClient.get(this.url).pipe(
      res => {
        console.log(res);
        return res;
      },
      error => error
    );
  };

  public getStatusPokemon(url:string):Observable<any>{
    return this.httpClient.get(url).pipe(
      res => {
        return res;
      },
      error => error
    );
  };


  // get getAllPokemons():Observable<any>{
  //   return this.httpClient.get<any>(this.url).pipe(
  //     tap(
  //       res => res
  //     ),
  //     tap( res => {
  //       console.log(res)
  //     })
  //   )
  // }

}
