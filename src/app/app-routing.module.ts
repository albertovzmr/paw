import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Aquí se agregarán los componentes creados

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path : '', component : LoginComponent },
  { path : 'login', component : LoginComponent},
  { path : 'dashboard', component : DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
