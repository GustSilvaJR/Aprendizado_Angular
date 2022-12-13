import { Component, OnInit } from '@angular/core';

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

  addFood(food:string):void{
    //this.foodListService.addFood(food);
    console.log('teste');
  }

}
