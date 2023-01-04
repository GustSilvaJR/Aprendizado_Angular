import { Component, OnInit } from '@angular/core';

//Interfaces
import { Investiments } from '../../models/investiments';
import { ListInvestimentsService } from '../services/list-investiments.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public investimentos:Array<Investiments> = [];

  constructor(private listInvService:ListInvestimentsService) { }

  ngOnInit(): void {
    this.listInvService.list().subscribe({
      next: (res) => {
        this.investimentos = res;
      },

      error: (err) => {
        console.log(err);
        alert("Erro na consulta da api");
      }
    })
  }

}
