import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//templates


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './mainApp/app.component';
import { TitleComponent } from './title/title.component';
import { DataBidingComponent } from './data-biding/data-biding.component';
import { FormsModule } from '@angular/forms';
import { DiretivasEstruturaisComponent } from './diretivas-estruturais/diretivas-estruturais.component';
import { DiretivasAtributosComponent } from './diretivas-atributos/diretivas-atributos.component';
import { SharedModule } from './shared/shared.module';
import { FormComponent } from './form/form.component';
import { MyReactiveFormModule } from './my-reactive-form/my-reactive-form.module';
import { RoutePagesModule } from './route-pages/route-pages.module';
import { AulasIniciaisComponent } from './aulas-iniciais/aulas-iniciais.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    DataBidingComponent,
    DiretivasEstruturaisComponent,
    DiretivasAtributosComponent,
    FormComponent,
    AulasIniciaisComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    MyReactiveFormModule,
    RoutePagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
