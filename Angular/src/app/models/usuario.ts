export class Usuario {
    id: number;
    apellido: string;
    nombre: string;
    dni: number;
    email: string;
    telefono: number;
    usuario: string;
    password: string;
    perfil: string;

constructor(apellido?: string, nombre?: string, dni?: number, email?: string, tel?: number, username?: string, password?: string, perfil?: string) {
        this.apellido = apellido;
        this.nombre = nombre;
        this.dni = dni;
        this.email = email;
        this.telefono = tel;
        this.usuario = username;
        this.password = password;
        this.perfil = perfil;
    }
}
