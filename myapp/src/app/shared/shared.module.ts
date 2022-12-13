import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponentComponent } from './new-component/new-component.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { FoodlistComponent } from './foodlist/foodlist.component';

@NgModule({
  declarations: [
    NewComponentComponent,
    InputComponent,
    OutputComponent,
    FoodlistComponent
  ],
  exports:[
    NewComponentComponent,
    InputComponent,
    OutputComponent,
    FoodlistComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
