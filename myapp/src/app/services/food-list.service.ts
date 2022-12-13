import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Food } from '../models/food'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  constructor(private httpClient:HttpClient) { }

  //Criando meu emissor de eventos
  public foodEvent =  new EventEmitter();

  //Url para meu servidor
  private url:string = "http://localhost:3000/";

  //Função para listar comidas que utiliza um Observable 
  public foodList(): Observable<Food>{
    return this.httpClient.get<Food>(this.url+'foods')
                .pipe(
                  res => res,
                  error => error,
                )
  }

  //public addFood(food:string):void{
    //Emitindo o valor da comida adicionada
   // this.foodEvent.emit(food);
    
   // this.foodList().push(food);
  //}
}
