import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { Vehiculo } from '../../models/vehiculo';
import { Reserva } from '../../models/reserva';
import { ReservaService } from '../../services/reserva.service';
import { VehiculoService } from '../../services/vehiculo.service';
import { AutentifiacionService } from '../../services/autentifiacion.service';


@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  esReserva = false;
  tutu = new Vehiculo();
  usuario = new Usuario();
  btnactualizar = false;

  vehiculos = [];
  vehiculo: Vehiculo = new Vehiculo();
  reserva = new Reserva(this.usuario, this.vehiculo);
  reservas = [];
  constructor(public servicio: ReservaService,
            public servicioTutu: VehiculoService,
            public autenticacion: AutentifiacionService) {
    this.esReserva = false;
    this.btnactualizar = false;
  }

  public traerVehiculos() {
    this.servicioTutu.getAll().subscribe(
      result => {
        this.vehiculos = JSON.parse(result.vehiculos);
      },
      error => {
        console.log(error);
      }
    );
  }

  public refreshListReserva() {
    this.servicio.getAll().subscribe(
      result => {
        this.reservas = JSON.parse(result.reservas);
      },
      error => {
        console.log(error);
      }
    );
  }

  public updateReserva() {
    this.servicio.update(this.reserva).subscribe(
      result => {
        console.log('update correcto');
        this.reserva = new Reserva(new Usuario(), new Vehiculo());
        this.refreshListReserva();
        this.btnactualizar = false;
      },
      error => console.log('error: ' + error)
    );
  }

  public saveReserva() {
    this.servicio.save(this.reserva).subscribe(
      data => {
        console.log('envio ok');
        console.log('agregado correctamente.');

        this.reserva = new Reserva(new Usuario(), new Vehiculo());
        this.refreshListReserva();
        this.btnactualizar = false;
        return true;
      },
      error => {
        console.error('Error saving!');
        console.log(error);
        return false;
      }
    );
  }

  elegirReserva(tutu: any) {
    this.reserva = this.reservas.filter(x => x === tutu).pop();
     this.btnactualizar = true;
  }

  elegirVehiculo(tutu: any) {
    this.vehiculo = this.vehiculos.filter(x => x === tutu).pop();
    console.log(this.vehiculo);
    this.reserva.vehiculo = this.vehiculo;
    this.reserva.usuario = this.autenticacion.userLogged;
  }

  eliminarReserva(reserva: any) {
    this.servicio.delete(reserva).subscribe(
      result => {
        console.log('envio delete');
        this.refreshListReserva();
      },
      error => console.log('error: ' + error)
    );
  }

  ngOnInit() {
    this.refreshListReserva();
    this.traerVehiculos();
  }

}
