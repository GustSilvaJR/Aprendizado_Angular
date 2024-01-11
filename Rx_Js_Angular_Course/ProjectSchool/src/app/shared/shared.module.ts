import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarTitleComponent } from './components/toolbar-title/toolbar-title.component';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ToolbarTitleComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    ToolbarTitleComponent,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
