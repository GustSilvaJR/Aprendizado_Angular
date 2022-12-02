import { AfterContentInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnDestroy {

  public title: String = "Bem vindo";
  public hello: String = "Hello ++ =D!";
  public visivel: boolean = true;

  constructor() { }


  public ngOnDestroy(): void {
    console.log("Componente title destruído");
  }

  ngOnInit(): void {
    this.hello = "Hello World!";
    console.log("Aqui" + this.title);
  }



}
