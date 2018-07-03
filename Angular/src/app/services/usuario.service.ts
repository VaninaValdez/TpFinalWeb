import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  userLoggedIn = false;
  userLogged: Usuario;
  port = '';

  constructor(private _http: Http) {
  }

  getAll() {
    return this._http.get('http://localhost' + this.port + '/FinalWeb/finalProyect/web/app_dev.php/usuario/')
      .map(res => res.json());
  }

  save(data: any) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(data);
    console.log('entro service create');
    return this._http.post('http://localhost' + this.port + '/FinalWeb/finalProyect/web/app_dev.php/usuario/new', body, options)
      .map((res: Response) => res.json());
  }

  update(data: any) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(data);
    // envio en el body el mensaje transformado en un JSON
    return this._http.post('http://localhost' + this.port + '/FinalWeb/finalProyect/web/app_dev.php/usuario/' + data.id + '/edit', body, options)
      .map((res: Response) => res.json());
  }

  delete(data: any) {
    // utilizo el metodo delete de http que es el configurado en el deleteAction de Symfony
    return this._http.delete(('http://localhost' + this.port + '/FinalWeb/finalProyect/web/app_dev.php/usuario/' + data.id))
      .map((res: Response) => res.json());
  }

  login(usuario: string, password: string) {
    // nico :3
    return this._http.post('http://localhost/FinalWeb/finalProyect/web/app_dev.php/usuario/authenticate',
      JSON.stringify({ usuario: usuario, password: password }))
      .map(res => res.json());
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.userLogged = new Usuario();
    this.userLoggedIn = false;
  }


}
