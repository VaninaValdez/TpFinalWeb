import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdministrativosComponent } from './components/administrativos/administrativos.component';
import { HomeComponent } from './components/home/home.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { NovedadComponent } from './components/novedad/novedad.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { ReservaComponent } from './components/reserva/reserva.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'vehiculos', component: AdministrativosComponent},
  {path: 'usuarios', component: AdministradorComponent},
  {path: 'reservas', component: ClienteComponent},
  {path: 'novedad', component: NovedadComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'login'}
];
 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
