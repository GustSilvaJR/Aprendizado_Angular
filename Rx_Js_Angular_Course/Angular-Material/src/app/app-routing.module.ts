import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormFieldInputComponent } from './form-field-input/form-field-input.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Progress_barComponent } from './progress_bar/progress_bar.component';
import { MatTabComponent } from './matTab/matTab.component';

const routes: Routes = [
  {path:'formInput', component:FormFieldInputComponent},
  {path:'home', component:HomeComponent},
  {path:'progressBar', component:Progress_barComponent},
  {path:'matTab', component:MatTabComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
