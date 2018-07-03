import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { HeaderComponent } from '../header/header.component';
import { Vehiculo } from '../../models/vehiculo';
import { VehiculoService } from '../../services/vehiculo.service';
import { Usuario } from '../../models/usuario';
import { Reserva } from '../../models/reserva';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  perfiladmin = false;
  perfilcliente = false;
  perfiladminis = false;
  vehiculo: Vehiculo = new Vehiculo();
  usuario: Usuario;
  reserva: Reserva = new Reserva();
  vehiculos: Array<Vehiculo>;
  esReserva = false;
  constructor(public tutuService: VehiculoService,
    public authenticationService: UsuarioService) {
    //  this.usuario = this.authenticationService.userLogged;
    this.usuario = new Usuario('', 'Maty', 111, 'matygise@mati.gise', 77, 'maty', 'gise', 'cliente');
    // this.vehiculos = this.tutuService.getAll();
  }

  elegir(auto: Vehiculo) {
    this.vehiculo = auto;
    // aca esReserva se hace V;
    this.esReserva = !this.esReserva;
  }

  crearReserva() {
    this.reserva.usuario = this.usuario;
    this.reserva.vehiculo = this.vehiculo;
    this.reserva.estado = 'pendiente';
    console.log('llamar al servicio reserva (new)');
    this.reserva = new Reserva();
    this.vehiculo = new Vehiculo();
    // aca esReserva se hace F;
    this.esReserva = !this.esReserva;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.authenticationService.logout();
  }

  ngOnInit() {
    // if (this.authenticationService.userLoggedIn) {
    //   this.perfiladmin = this.authenticationService.userLogged.perfil === 'administrador';
    //   this.perfilcliente = this.authenticationService.userLogged.perfil === 'cliente';
    //   this.perfiladminis = this.authenticationService.userLogged.perfil === 'administrativo';
    //   this.header.validar();
    // }
  }
}
