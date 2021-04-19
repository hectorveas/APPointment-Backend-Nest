import { Document } from "mongoose";

export interface Patient extends Document{
    //__id?: string;
    readonly nombrePaciente: string;
    readonly apellidoPaciente: string;
    readonly rut: string;
    readonly email: string;
    readonly fono: string;
    readonly contrasena: string;
    readonly createdAt: Date;
}