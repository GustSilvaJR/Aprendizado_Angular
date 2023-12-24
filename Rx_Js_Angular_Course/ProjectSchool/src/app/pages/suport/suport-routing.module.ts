import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuportComponent } from './main/suport.component';

const routes: Routes = [{ path: '', component: SuportComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuportRoutingModule { }
