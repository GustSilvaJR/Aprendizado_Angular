import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './main/courses.component';
import { CoursesMaterialModule } from '@app/shared/material/courses-mat.module';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    CoursesMaterialModule,
    SharedModule
  ]
})
export class CoursesModule { }
