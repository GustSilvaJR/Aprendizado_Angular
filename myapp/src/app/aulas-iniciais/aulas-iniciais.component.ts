import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aulas-iniciais',
  templateUrl: './aulas-iniciais.component.html',
  styleUrls: ['./aulas-iniciais.component.scss']
})
export class AulasIniciaisComponent  {

  constructor() { }

  public title:String = 'myapp';
  public life:boolean = true;
  public dataFood:food;

  public destroyComponent():void{
    this.life = false;
  }

  public setData(event:food){
    this.dataFood=event;
  }

}

interface food{
  nome:string;
  preco:number
}
