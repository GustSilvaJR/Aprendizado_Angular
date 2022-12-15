import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Food } from '../models/food';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  constructor(private httpClient: HttpClient) { }

  //Criando meu emissor de eventos
  public foodEvent = new EventEmitter();

  //Url para meu servidor
  private url: string = "http://localhost:3000/";

  //Função para listar comidas que utiliza um Observable 
  public foodList(): Observable<Array<Food>> {
    return this.httpClient.get<Array<Food>>(this.url + 'foods')
      .pipe(
        res => res,
        error => error,
      )
  }

  public addFood(value: Food): Observable<Food> {
    return this.httpClient.post<Food>(this.url + 'foods', { id: value.id, name: value.name, preco: value.preco })
      .pipe(
        res => res,
        error => error
      )
  }

  public foodListAlert(value: Food) {
    return this.foodEvent.emit(value);
  }

  public editFood(value: Food): Observable<Food> {
    return this.httpClient.put<Food>(this.url + 'foods/' + value.id, {id: value.id, name: value.name, preco: value.preco})
      .pipe(
        res => res,
        error => error
      )
  };

  public deleteFood(id: string): Observable<any> {
    return this.httpClient.delete<any>(this.url + 'foods/' + id)
      .pipe(
        res => res,
        error => error
      )
  };

}
