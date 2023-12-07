import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { MyConquestsComponent } from './my-conquests/my-conquests.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyDisciplinesComponent } from './my-disciplines/my-disciplines.component';


@NgModule({
  declarations: [
    UsersComponent,
    MyConquestsComponent,
    MyProfileComponent,
    MyDisciplinesComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
