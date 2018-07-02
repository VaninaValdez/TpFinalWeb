import {Usuario} from './usuario';
import {Vehiculo} from './vehiculo';

export class Reserva{
    id: number;
    usuario: Usuario;
    vehiculo: Vehiculo;
    dias: number;
    costoRenta: number;
    fechaRenta: Date;
    estado: string ;

    constructor(id?: number, usuario?: Usuario, vehiculo?: Vehiculo, dias?: number, costoRenta?: number, fechaRenta?: Date, estado?: string){
        this.id=id;
        this.usuario=usuario;
        this.vehiculo=vehiculo;
        this.dias=dias;
        this.costoRenta=costoRenta;
        this.fechaRenta=fechaRenta;
        this.estado=estado;
    }
}