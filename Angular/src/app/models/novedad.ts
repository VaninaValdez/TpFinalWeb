import { Usuario } from './usuario';

export class Novedad {
  id: number;
  usuario: Usuario;
  texto: string;
  estado: string;

  constructor(usuario?: Usuario, texto?: string, estado?: string) {
    this.usuario = usuario;
    this.texto = texto;
    this.estado = estado;
  }
}
