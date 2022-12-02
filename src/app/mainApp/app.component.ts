import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title:String = 'myapp';
  public life:boolean = true;

  public destroyComponent():void{
    this.life = false;
  }
}
