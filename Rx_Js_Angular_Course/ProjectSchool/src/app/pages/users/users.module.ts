import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UsersMaterialModule } from '@app/shared/material/users-mat.module';
import { SharedModule } from '@app/shared/shared.module';
import { UsersComponent } from './main/users.component';
import { MyConquestsComponent } from './my-conquests/my-conquests.component';
import { MyDisciplinesComponent } from './my-disciplines/my-disciplines.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { UsersRoutingModule } from './users-routing.module';


@NgModule({
  declarations: [
    UsersComponent,
    MyConquestsComponent,
    MyProfileComponent,
    MyDisciplinesComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    UsersMaterialModule,
    SharedModule,
  ]
})
export class UsersModule { }
