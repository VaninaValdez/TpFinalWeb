import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { Vehiculo } from '../../models/vehiculo';


@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {
esReserva = false;
vehiculos = [];
  constructor() {
this.esReserva = false;
   }

  ngOnInit() {
  }

}
