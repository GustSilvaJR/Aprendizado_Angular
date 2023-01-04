import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from '../investiments/list/list.component';

import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingComponent, ListComponent]
    }) 
    .compileComponents();

    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(U) depositar(): should increasce the value of saldo with the parameter passed', () => {
    const saldoInicial = component.saldo;
    const deposito = '10';
  
    component.depositar(deposito);

    expect(component.saldo).toEqual(saldoInicial+parseFloat(deposito));
  });

  it('(U) isPossible(): Will test if is possible get some value of the current account expect false', ()=>{
    const saldoInicial = component.saldo;
    const saque = saldoInicial + 10;

    expect(component.isPossible(saque)).toBeFalsy();

  });
  
  it('(U) isPossible(): Will test if is possible get some value of the current account, expect true', ()=>{
    const saldoInicial = component.saldo;
    const saque = saldoInicial;

    expect(component.isPossible(saque)).toBeTruthy();

  });

  it('(U) sacar(): should get a value from the current account', ()=>{
    const saldoInicial = component.saldo;
    const saque = saldoInicial - 10;

    component.sacar(saque.toString());

    expect(component.saldo).toEqual(saldoInicial-saque);
  });

  it('(U) sacar(): should not get any value of the account', ()=>{
    const saldoInicial = component.saldo;
    const saque = saldoInicial + 10;

    component.sacar(saque.toString());

    expect(component.saldo).toEqual(saldoInicial);
  });

  //Teste de interface
  it('(U) depositar() - interface: Will test if when I add some value in my wallet, the interface will update the value', ()=>{
    const body = fixture.debugElement.nativeElement;
    console.log(component.saldo);

    const oldValue = body.querySelector("#currentBalance").textContent; 
    console.log(oldValue);
    console.log("testando")

    body.querySelector("#inpDeposito").value = '20';
    body.querySelector("#deposito button").click();
    
    fixture.detectChanges();//Detecta as mudanças que ocorrem na interface, a partir de alguma ação do back-end

    console.log(body.querySelector("#currentBalance").textContent);
    console.log(component.saldo);

    expect(body.querySelector("#currentBalance").textContent).not.toEqual(oldValue); 

  })
});
