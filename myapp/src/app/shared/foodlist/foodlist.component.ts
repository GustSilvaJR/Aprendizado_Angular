import { Component, OnInit } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.scss']
})
export class FoodlistComponent implements OnInit {

  public foodList: Array<string> = [];

  constructor(private foodListService:FoodListService) { }

  ngOnInit(): void {
    this.foodList = this.foodListService.foodList(); 
  }



}
