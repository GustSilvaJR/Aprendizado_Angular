import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AulasIniciaisComponent } from './aulas-iniciais/aulas-iniciais.component';
import { HomeComponent } from './route-pages/home/home.component';
import { PageErrorComponent } from './route-pages/page-error/page-error.component';
import { SobreComponent } from './route-pages/sobre/sobre.component';

const routes: Routes = [
  {path:"", component:HomeComponent, pathMatch:"full"},
  {path:"404", component:PageErrorComponent},

  {path:"sobre", component:SobreComponent, children:[
    {path:"sobre/:id/:name", component:SobreComponent},
  ]},

  {path:"dashboard", loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},

  {path:"aulasIniciais", component:AulasIniciaisComponent},
  {path:"**", redirectTo:'404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
