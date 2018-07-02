import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './../../services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  perfiladmin = false;
  perfilcliente = false;
  perfiladminis = false;

  constructor(public authenticationService: UsuarioService) {
    if (this.authenticationService.userLoggedIn) {
      this.perfiladmin = this.authenticationService.userLogged.perfil === 'administrador';
      this.perfilcliente = this.authenticationService.userLogged.perfil === 'cliente';
      this.perfiladminis = this.authenticationService.userLogged.perfil === 'administrativo';
    }
   }

  logout() {
    localStorage.removeItem('currentUser');
    this.authenticationService.logout();
  }

  ngOnInit() {

  }
public validar() {
  if (this.authenticationService.userLoggedIn) {
    this.perfiladmin = this.authenticationService.userLogged.perfil === 'administrador';
    this.perfilcliente = this.authenticationService.userLogged.perfil === 'cliente';
    this.perfiladminis = this.authenticationService.userLogged.perfil === 'administrativo';
  }
}
}
