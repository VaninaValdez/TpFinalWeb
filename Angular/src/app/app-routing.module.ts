import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdministrativosComponent } from './components/administrativos/administrativos.component';
import { HomeComponent } from './components/home/home.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { ClienteComponent } from './components/cliente/cliente.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'vehiculos', component: AdministrativosComponent},
  {path: 'usuarios', component: AdministradorComponent},
  {path: 'reservas', component: ClienteComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'login'}
];
 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
