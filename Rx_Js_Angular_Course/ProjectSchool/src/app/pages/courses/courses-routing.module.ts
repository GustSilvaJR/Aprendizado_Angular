import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './main/courses.component';
import { CoursesListComponent } from './courses-list/courses-list.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    pathMatch: 'prefix',
    children:[
      {
        path:'',
        pathMatch:'full',
        redirectTo:'myProfile'
      },
      {
        path: 'list',
        component: CoursesListComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
