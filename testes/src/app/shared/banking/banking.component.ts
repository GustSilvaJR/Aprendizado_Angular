import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss']
})
export class BankingComponent implements OnInit {

  public saldo:number = 100.00;

  constructor() { }

  ngOnInit(): void {
  }

  public isPossible(num:number):boolean{
    if(this.saldo>=num){
      this.saldo -= num;
      return true;
    }else{
      return false;
    }
  }

  public sacar(number:string):number{
    const num = parseFloat(number);

    if(this.isPossible(num)){
      console.log(`Sacado com sucesso! : ${num}`);
      return num;
    }else{
      console.log(`Nao é possivel sacar ${num} de ${this.saldo}`)
      return num;
    }
  }

  public depositar(number:string):number{
    const num = parseFloat(number);
    this.saldo+=num;
    console.log(`Depósito efetuado com sucesso! : ${num}`);

    return num;
  }

}
