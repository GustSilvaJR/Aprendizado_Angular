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
      next: (res:Food) => {
        alert("Nova Comida cadastrada");
        this.foodList.push(res);
      },
      error: (err:Error) => alert(err) 
    });
  }

  public editFood(id:string, name:string, preco:string){
    let food:Food = {
      id,
      name,
      preco
    }

    this.foodListService.editFood(food).subscribe({
      next: (res:Food) => {
        alert("Editado com sucesso!");
        console.log(res);
      },
      error: (err:Error) => alert(`Erro ${err}`)
    })
  };

  public deleteFood(id:string):void{
    this.foodListService.deleteFood(id).subscribe({
      next: (res:any) => {
        alert("Alimento deletado!");
        let newFoodList = this.foodList.filter((food)=>food.id != id);
        this.foodList = newFoodList;
      },
        error: (err:any) => alert("Erro: "+ err)
    })
  }

}
