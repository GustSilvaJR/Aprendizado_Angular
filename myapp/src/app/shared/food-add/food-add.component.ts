import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/models/food';

//Serviço
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {

  //Injeção de dependência
  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
  }

  addFood(id:string, name:string, preco:string){
    const obj:Food ={
      id,
      name,
      preco
    }

    this.foodListService.addFood(obj)
    .subscribe({
      next: (res:Food) => this.foodListService.foodListAlert(res),
      error: (error:Error) => error

    })
  }

}
