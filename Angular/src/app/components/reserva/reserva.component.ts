import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { Vehiculo } from '../../models/vehiculo';
import { Reserva } from '../../models/reserva';
import { ReservaService } from '../../services/reserva.service';
import { VehiculoService } from '../../services/vehiculo.service';


@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
  esReserva = false;
  tutu = new Vehiculo();
  usuario = new Usuario();
  reserva = new Reserva();
  vehiculos = [];
  vehiculo: Vehiculo = new Vehiculo();
  reservas = [];
  constructor(public servicio: ReservaService,
            public servisioTutu: VehiculoService) {
    this.esReserva = false;
  }

  public traerVehiculos() {
    this.servisioTutu.getAll().subscribe(
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

  public updateReserva(reserva: any) {
    this.servicio.update(reserva).subscribe(
      result => {
        console.log('update correcto');
        this.refreshListReserva();
      },
      error => console.log('error: ' + error)
    );
  }

  public saveReserva() {
    this.servicio.save(this.reserva).subscribe(
      data => {
        console.log('envio ok');
        console.log('agregado correctamente.');
        this.reserva = new Reserva();
        this.refreshListReserva();
        this.esReserva = false;
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
     this.esReserva = true;
  }

  elegirVehiculo(tutu: any) {
    this.vehiculo = this.vehiculos.filter(x => x === tutu).pop();
    this.reserva.vehiculo = this.vehiculo;
    // this.reserva.usuario = ;
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
