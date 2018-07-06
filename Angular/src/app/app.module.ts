import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTableModule } from 'angular2-datatable';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { UsuarioService } from './services/usuario.service';
import { AdministrativosComponent } from './components/administrativos/administrativos.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { HomeComponent } from './components/home/home.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { DatatablesProductsComponent } from './datatables-products/datatables-products.component';
import { NovedadComponent } from './components/novedad/novedad.component';
import { VehiculoComponent } from './components/vehiculo/vehiculo.component';
import { ReservaComponent } from './components/reserva/reserva.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdministradorComponent,
    AdministrativosComponent,
    LoginComponent,
    ClienteComponent,
    HomeComponent,
    DatatablesProductsComponent,
    NovedadComponent,
    VehiculoComponent,
    ReservaComponent
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
