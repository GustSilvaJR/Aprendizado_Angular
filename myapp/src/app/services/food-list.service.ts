import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  private list:Array<string> = [
    'lanchao',
    'barca',
    'chocolate'
  ];

  constructor() { }

  public foodList():Array<string>{
    return this.list;
  }
}
