import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  userLoggedIn: boolean = false;
  userLogged: Usuario;

  constructor() { }

  login(usuario: string, password: string) {
    // nico :3
    return this.http.post('http://localhost/FinalWeb/finalProyect/web/app_dev.php/usuario/authenticate',
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
