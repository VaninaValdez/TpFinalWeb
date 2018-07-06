import { Component, OnInit } from '@angular/core';
import { AutentifiacionService } from '../../services/autentifiacion.service';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  perfiladmin = false;
  perfilcliente = false;
  perfiladminis = false;
  usuario = new Usuario();
  btnlogout = false;

  constructor(private router: Router, public servicio: AutentifiacionService) {
  this.btnlogout = false;
  }

  ngOnInit() {
this.actualizar();
  }

  logout() {
    this.servicio.logout();
    this.perfiladmin = this.perfiladminis = this.perfilcliente = false;
    this.router.navigate(['login']);
  }
  login() {
    this.router.navigate(['login']);
  }

public actualizar() {
  this.servicio.getObservable().subscribe(
    result => {
      if (this.servicio.userLoggedIn !== null) {
        const perfil = result.perfil;
        this.btnlogout = true;
        if (perfil === 'administrador') {
          this.perfiladmin = true; console.log('entro admin');
          this.usuario = this.servicio.userLogged;
          this.btnlogout = true;
        }
        if (perfil === 'cliente') {
          this.perfilcliente = true; console.log('entro cliente');
          this.usuario = this.servicio.userLogged;
          this.btnlogout = true;
        }
        if (perfil === 'administrativo') {
          this.perfiladminis = true; console.log('entro adminis');
          this.usuario = this.servicio.userLogged;
          this.btnlogout = true;
        }
      }
    }
  );
}
}
