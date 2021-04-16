import { Document } from 'mongoose'

export interface Appointment extends Document{
    // _id?: string;
    readonly paciente: string;
    readonly fechaConsulta: Date;
    readonly descripcion: string;
    readonly estadoCita: string;
    readonly motivoCancelacion?: string;
    readonly personaCancelar?: string;
  }