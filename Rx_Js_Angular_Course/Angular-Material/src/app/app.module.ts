import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './Material/Material.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ButtonsIconsComponent } from './buttons-icons/buttons-icons.component';
import { FormFieldInputComponent } from './form-field-input/form-field-input.component';
import { Progress_barComponent } from './progress_bar/progress_bar.component';
import { MatTabComponent } from './matTab/matTab.component';




@NgModule({
  declarations: [	
    AppComponent,
      ButtonsIconsComponent,
      FormFieldInputComponent,
      HomeComponent,
      Progress_barComponent,
      MatTabComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearence:'outline'}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
