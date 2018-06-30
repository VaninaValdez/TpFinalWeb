import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdministrativosComponent } from './components/administrativos/administrativos.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { AutentificacionComponent } from './components/autentificacion/autentificacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdministrativosComponent,
    AdministradorComponent,
    ClienteComponent,
    AutentificacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
