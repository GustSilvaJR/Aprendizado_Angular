import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    pathMatch: 'prefix',
    children:[
      {
        path:'',
        pathMatch:'full',
        redirectTo:'myProfile'
      },
      {
        path: 'myProfile',
        component: MyProfileComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
