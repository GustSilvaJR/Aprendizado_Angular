import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StudentsComponent } from './main/students.component';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentsMaterialModule } from '@app/shared/material/students-mat.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    StudentsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    StudentsMaterialModule,
    SharedModule
  ]
})
export class StudentsModule { }
