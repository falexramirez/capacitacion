import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ejercicio1Component } from './ejercicio-1/ejercicio1.component';
import { Ejercicio2Component } from './ejercicio-2/ejercicio2.component';

const routes: Routes = [
  { path: 'ejercicio-1', component: Ejercicio1Component },
  { path: 'ejercicio-2', component: Ejercicio2Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
