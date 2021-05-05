import { Document } from 'mongoose';

export interface Doctor extends Document {
  //_id: string;
  readonly nombreDoctor: string;
  readonly apellidoDoctor: string;
  readonly rut: string;
  readonly email: string;
  readonly fono: string;
  readonly contrasena: string;
  readonly especialidad: string;
}
