import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarTitleComponent } from './components/toolbar-title/toolbar-title.component';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToolbarMenuComponent } from './components/toolbar-menu/toolbar-menu.component';



@NgModule({
  declarations: [
    ToolbarTitleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports:[
    ToolbarTitleComponent,
    FlexLayoutModule,

  ]
})
export class SharedModule { }
