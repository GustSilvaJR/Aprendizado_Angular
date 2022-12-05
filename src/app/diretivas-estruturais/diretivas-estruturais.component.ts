import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})

export class DiretivasEstruturaisComponent implements OnInit { 

  public resultBrasilGameSaturday: any = null;
  public users:Array<myList> = 
  [
    {
      name:"Gustavo",
      idade:22
    },
    {
      name:"Sabrina",
      idade:25  
    }
  ];
  
  public auxSwitch:String = "Gustavo";

  constructor() { }

  ngOnInit(): void {
  }

}

interface myList{
  name:String,
  idade:number
};