import { Component, OnInit } from '@angular/core';
import { Novedad } from '../../models/novedad';
import { NovedadService } from '../../services/novedad.service';
import { Usuario } from '../../models/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { AutentifiacionService } from '../../services/autentifiacion.service';

@Component({
  selector: 'app-novedad',
  templateUrl: './novedad.component.html',
  styleUrls: ['./novedad.component.css']
})
export class NovedadComponent implements OnInit {
  novedad: Novedad = new Novedad();
  novedades = [];
  usuarios: Array<Usuario> = [];
  usuario = new Usuario();


  constructor(
    private autenticacion: AutentifiacionService,
    private servicioUser: UsuarioService,
    private servicio: NovedadService) {
  }

  ngOnInit() {
    this.getUsuarios();
    this.refreshListNovedad();
  }

  public refreshListNovedad() {
    this.servicio.getAll().subscribe(
      result => {
        this.novedades = JSON.parse(result.novedades);
      },
      error => {
        console.log(error);
      }
    );
  }

  public getUsuarios() {
    this.servicioUser.getAll().subscribe(
      result => {
        this.usuarios = JSON.parse(result.usuarios);

      },
      error => {
        console.log(error);
      }
    );
  }


  public saveNovedad() {
    this.servicio.save(this.novedad).subscribe(
      data => {
        console.log('envio ok');
        console.log('agregado correctamente.');
        this.novedad = new Novedad();
        this.refreshListNovedad();
        return true;
      },
      error => {
        console.error('Error saving!');
        console.log(error);
        return false;
      }
    );
  }


  public updateNovedad() {
    this.servicio.update(this.novedad).subscribe(
      result => {
        console.log('update correcto');
        this.novedad = new Novedad();
        this.refreshListNovedad();
      },
      error => console.log('error: ' + error)
    );
  }

  eliminarNovedad(novedad: any) {
    this.servicio.delete(novedad).subscribe(
      result => {
        console.log('envio delete');
        this.refreshListNovedad();
      },
      error => console.log('error: ' + error)
    );
  }
}
