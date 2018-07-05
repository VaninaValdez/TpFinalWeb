import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from './../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { AutentifiacionService } from '../../services/autentifiacion.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userform: Usuario = new Usuario();
  returnUrl: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AutentifiacionService) {
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
login() {
    this.authenticationService.login(this.userform.usuario, this.userform.password)
        .subscribe(
            data => {
                  var user = JSON.parse(data.usuario);
                  console.log(user);
                  if (user.usuario != null) {
                      // setea el usuario logeado para que pueda ser escuchado en el header
                      this.authenticationService.setUserLogged(user);
                      //
                      localStorage.setItem('currentUser', JSON.stringify(user));
                      this.router.navigateByUrl('home');
                  }
            },
            error => {
                console.log('error...');
                console.log(error);
            });
}

}
