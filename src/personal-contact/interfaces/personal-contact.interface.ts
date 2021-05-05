import { Document } from 'mongoose';

export interface PersonalContact extends Document {
  //_id: string;
  readonly nombrePaciente: string;
  readonly rut: string;
  readonly email: string;
  readonly contrasena: string;
  readonly telefono: string;
  readonly confirmacion?: boolean;
  readonly fechaSolicitud: Date;
}
