import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit, OnChanges {

  public name: string = "Testando interpolation";
  public formatNoDashesOrDots: string = "Insira seu dado sem pontos e traços";
  public twoWayDataBidingInput: any = "Valor default";

  constructor() { }

  onSpacePress():void{
    alert("Por favor, não utilize espaços");
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log("Houve alteração:");
      console.log(changes);
  }

  change(): void{
    console.log("Valor atributo:" + this.twoWayDataBidingInput);
  }

  ngOnInit(): void {
  }

}
