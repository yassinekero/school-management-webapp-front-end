import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartementComponent } from './departement/departement.component';
import { ModuleComponent } from './module/module.component';
import { FiliereComponent } from './filiere/filiere.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListDepartementComponent } from './list-departement/list-departement.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartementComponent,
    ModuleComponent,
    FiliereComponent,
    ListDepartementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
