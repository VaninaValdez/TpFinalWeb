import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { AdministrativosComponent } from './components/administrativos/administrativos.component';
import { ClienteComponent } from './components/cliente/cliente.component';
const routes: Routes = [
  { path: 'administrador', component: AdministradorComponent },
  { path: 'administrativos', component: AdministrativosComponent },
  { path: 'cliente', component: ClienteComponent },
 ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
