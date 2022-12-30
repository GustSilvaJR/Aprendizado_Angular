import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './shared/account/account.component';
import { CanActivateGuard } from './shared/guards/can-activate.guard';
import { CanDeactivateGuard } from './shared/guards/can-deactivate.guard';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"account", component:AccountComponent, canActivate: [CanActivateGuard], canDeactivate: [CanDeactivateGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
