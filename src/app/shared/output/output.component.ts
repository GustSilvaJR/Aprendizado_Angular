import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() public sendData = new EventEmitter();

  public comidas:Array<comida> = [
    {
      nome: "Cochinha",
      preco: 20.00
    },
    {
      nome: "Pastel",
      preco: 22.40
    }
  ] 

  constructor() { }

  ngOnInit(): void {
  }

  public add(index:number):void{
    this.sendData.emit(this.comidas[index]);
    console.log(this.comidas[index]);
  }

}

interface comida{
  nome:string,
  preco:number
}
