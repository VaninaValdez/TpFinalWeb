import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
user: Usuario = new Usuario();
users = [];
btnactualizar = false;
submitted = false;
constructor(private servicio: UsuarioService) {
  this.btnactualizar = false;
}

onSubmit() {
  this.submitted = true;
}
ngOnInit() {
  this.refreshListUser();
}

public refreshListUser() {
  this.servicio.getAll().subscribe(
    result => {
      this.users = JSON.parse(result.users);
    },
    error => {
      console.log(error);
    }
  );
}

public updateUser(user: any) {
  this.servicio.update(user).subscribe(
    result => {
      console.log('update correcto');
      this.refreshListUser();
    },
    error => console.log('error: ' + error)
  );
}

public saveUser() {
  this.servicio.save(this.user).subscribe(
    data => {
      console.log('envio ok');
      console.log('agregado correctamente.');
      this.user = new Usuario();
      this.refreshListUser();
      return true;
    },
    error => {
      console.error('Error saving!');
      console.log(error);
      return false;
    }
  );
}

elegirUser(user: any) {
  this.user = this.users.filter(x => x === user).pop();
  this.btnactualizar = true;
}

eliminarUser(user: any) {
  this.servicio.delete(user).subscribe(
    result => {
      console.log('envio delete');
      this.refreshListUser();
    },
    error => console.log('error: ' + error)
  );
}

}
