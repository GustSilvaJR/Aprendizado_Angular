import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SuportComponent } from './main/suport.component';
import { SuportRoutingModule } from './suport-routing.module';
import { SuportMaterialModule } from '@app/shared/material/suport-mat.module';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    SuportComponent
  ],
  imports: [
    CommonModule,
    SuportRoutingModule,
    SuportMaterialModule,
    SharedModule
  ]
})
export class SuportModule { }
