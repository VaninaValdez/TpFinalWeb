import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  perfiladmin = false;
  perfilcliente = false;
  perfiladminis = false;
  @ViewChild(HeaderComponent) header: HeaderComponent;
  constructor(public authenticationService: UsuarioService) {

   }

  logout() {
    localStorage.removeItem('currentUser');
    this.authenticationService.logout();
  }

  ngOnInit() {
    if (this.authenticationService.userLoggedIn) {
      this.perfiladmin = this.authenticationService.userLogged.perfil === 'administrador';
      this.perfilcliente = this.authenticationService.userLogged.perfil === 'cliente';
      this.perfiladminis = this.authenticationService.userLogged.perfil === 'administrativo';
      this.header.validar();
    }
  }
}
