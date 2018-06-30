import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './../../services/usuario.service'; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public authenticationService: UsuarioService) { }

  logout(){
    localStorage.removeItem('currentUser');
    this.authenticationService.logout();
  }

  ngOnInit() {
  }

}
