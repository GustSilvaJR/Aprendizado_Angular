import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TeachersComponent } from './main/teachers.component';
import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersMaterialModule } from '@app/shared/material/teachers-mat.module';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    TeachersComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    TeachersMaterialModule,
    SharedModule

  ]
})
export class TeachersModule { }
