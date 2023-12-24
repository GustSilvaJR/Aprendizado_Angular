import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-title',
  templateUrl: './toolbar-title.component.html',
  styleUrls: ['./toolbar-title.component.scss']
})
export class ToolbarTitleComponent {

  iconFa = '';
  iconMat = '';

  @Input() title:string = "";

  @Input()
  set icon(value : string) {
    value.includes('fa-')
    ?
      this.iconFa = `fa-icon-cap ${value}`
    :
      this.iconMat = value;
  }

}
