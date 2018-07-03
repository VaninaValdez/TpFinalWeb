import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Vehiculo } from '../models/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  port = '';

  constructor(private _http: Http) {
  }

  getAll() {
    return this._http.get('http://localhost' + this.port + '/FinalWeb/finalProyect/web/app_dev.php/vehiculo/')
      .map(res => res.json());
  }

  save(data: any) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(data);
    console.log('entro service create');
    return this._http.post('http://localhost' + this.port + '/FinalWeb/finalProyect/web/app_dev.php/vehiculo/new', body, options)
      .map((res: Response) => res.json());
  }

  update(data: any) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(data);
    // envio en el body el mensaje transformado en un JSON
    return this._http.post('http://localhost' + this.port + '/FinalWeb/finalProyect/web/app_dev.php/vehiculo/' + data.id + '/edit', body, options)
      .map((res: Response) => res.json());
  }

  delete(data: any) {
    // utilizo el metodo delete de http que es el configurado en el deleteAction de Symfony
    return this._http.delete(('http://localhost' + this.port + '/FinalWeb/finalProyect/web/app_dev.php/vehiculo/' + data.id))
      .map((res: Response) => res.json());
  }

}
