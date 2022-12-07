import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
