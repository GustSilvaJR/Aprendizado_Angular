import { Component, OnInit } from '@angular/core';
import { Theme } from '../../enums/theme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public icon:string = Theme.LIGHT_THEME;
  public textTheme:string = Theme.TEXT_LIGHT;

  constructor() { }

  ngOnInit(): void {
  }

  public toggle():void{
    const theme = document.body.classList.toggle('dark-theme');
    console.log(theme);

    if(theme){
      this.icon = Theme.DARK_THEME;
      this.textTheme = Theme.TEXT_DARK;
    }else{
      this.icon = Theme.LIGHT_THEME;
      this.textTheme = Theme.TEXT_LIGHT;
    }

  }

}
