import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  public valor: boolean = false;
  public nameNewUser: string;
  public ageNewUser: number;
  public users: Array<user> = [];
  public btnTemp:string = "Exibir template";
  public show:boolean = false; 

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.valor = !this.valor;
    }, 500);
  }

  public add(): void {

    console.log(this.nameNewUser, typeof(this.nameNewUser));
    console.log(this.ageNewUser, typeof(this.ageNewUser))

    this.users.push(
      {
        name:this.nameNewUser,
        idade:this.ageNewUser
      }
    )
  }

  public showTemp():void{
      this.show = !this.show;

      this.btnTemp = this.btnTemp=="Exibir template" ? "Ocultar template" : "Exibir template";
      
  }

}

interface user {
  name: string,
  idade: number
}