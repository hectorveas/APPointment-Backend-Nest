import { Document } from "mongoose";

export interface Contact extends Document{
    //_id?: string;
    readonly nombre: string;
    readonly apellido: string;
    readonly rut: string;
    readonly mail: string;
    readonly consulta: string;
    readonly fechaSolicitud: Date;
}
  