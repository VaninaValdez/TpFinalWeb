export class Vehiculo{
    id: number;
    patente: string;
    marca: string;
    modelo: string;
    pathimagen: string;
    disponible: boolean;


    constructor(id?: number, patente?: string, marca?: string, modelo?: string, pathimagen?: string, disponible?: boolean){
        this.id=id;
        this.patente=patente;
        this.marca=marca;
        this.modelo=modelo;
        this.pathimagen=pathimagen;
        this.disponible=disponible;        
    }
}