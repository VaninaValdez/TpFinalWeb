import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../models/vehiculo';
import { VehiculoService } from '../../services/vehiculo.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {
  vehiculo = new Vehiculo();
  vehiculos = [];
  btnactualizar = false;
  submitted = false;
  constructor(private servicio: VehiculoService) {
    this.btnactualizar = false;
  }

  onSubmit() {
    this.submitted = true;
  }
  ngOnInit() {
    this.refreshListVehiculo();
  }

  public refreshListVehiculo() {
    this.servicio.getAll().subscribe(
      result => {
        this.vehiculos = JSON.parse(result.vehiculos);
      },
      error => {
        console.log(error);
      }
    );
  }

  public updateVehiculo(vehiculo: any) {
    this.servicio.update(vehiculo).subscribe(
      result => {
        console.log('update correcto');
        this.refreshListVehiculo();
      },
      error => console.log('error: ' + error)
    );
  }

  public saveVehiculo() {
    this.servicio.save(this.vehiculo).subscribe(
      data => {
        console.log('envio ok');
        console.log('agregado correctamente.');
        this.vehiculo = new Vehiculo();
        this.refreshListVehiculo();
        return true;
      },
      error => {
        console.error('Error saving!');
        console.log(error);
        return false;
      }
    );
  }

  elegirVehiculo(vehiculo: any) {
    this.vehiculo = this.vehiculos.filter(x => x === vehiculo).pop();
    this.btnactualizar = true;
  }

  eliminarVehiculo(vehiculo: any) {
    this.servicio.delete(vehiculo).subscribe(
      result => {
        console.log('envio delete');
        this.refreshListVehiculo();
      },
      error => console.log('error: ' + error)
    );
  }
}
