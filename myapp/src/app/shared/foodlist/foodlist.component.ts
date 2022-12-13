import { Component, OnInit } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';
import { Food } from 'src/app/models/food';


@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.scss']
})
export class FoodlistComponent implements OnInit {

  public foodList: Array<Food>;

  constructor(private foodListService:FoodListService) { }

  ngOnInit(): void {
    this.foodListService.foodList().subscribe({
      next:(res) => {
        this.foodList = res;
      },
      error:(err) => alert(err) 
    }) 

    //Inscrevento no event emitter do meu serviço
    this.foodListService.foodEvent.subscribe({
      next: (res:string) => alert(res),
      error: (err:Error) => alert(err) 
    });
  }

}
