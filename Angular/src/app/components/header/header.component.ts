import { Component, OnInit } from '@angular/core';
import { AutentifiacionService } from '../../services/autentifiacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  perfiladmin = false;
  perfilcliente = false;
  perfiladminis = false;

  constructor(private router: Router, public servicio: AutentifiacionService) {
   }

  ngOnInit() {
this.actualizar();
  }

  logout() {
    this.servicio.logout();
    this.perfiladmin = this.perfiladminis = this.perfilcliente = false;
    this.router.navigate(['login']);
  }

public actualizar() {
  this.servicio.getObservable().subscribe(
    result => {
      if (this.servicio.userLoggedIn !== null) {
        const perfil = result.perfil;
        if (perfil === 'administrador') {
          this.perfiladmin = true; console.log("entro admin");
        }
        if (perfil === 'cliente') {
          this.perfilcliente = true;console.log("entro cliente");
        }
        if (perfil === 'administrativo') {
          this.perfiladminis = true;console.log("entro adminis");
        }
      }
    }
  );
}
}
