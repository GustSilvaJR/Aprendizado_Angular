import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { LoginComponent } from './auth/components/login/login.component';

import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class CoreModule { }
