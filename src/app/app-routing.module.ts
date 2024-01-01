import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartementComponent } from './departement/departement.component';
import { ModuleComponent } from './module/module.component';
import { ListDepartementComponent } from './list-departement/list-departement.component';
import { FiliereComponent } from './filiere/filiere.component';

const routes: Routes =
  [
  //  { path: "", redirectTo: "departement", pathMatch: "full" },
  { path: 'departements', component: ListDepartementComponent },
    { path: 'departements/create', component: DepartementComponent },
    { path: 'module/create', component: ModuleComponent },
    {path : "filiere/create" , component : FiliereComponent}
    //{ path: "**",redirectTo : "departement"},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
