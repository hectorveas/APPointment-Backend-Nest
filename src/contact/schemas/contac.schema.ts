import { Schema } from 'mongoose';

export const ContactSchema = new Schema({
  //_id?: string;
  nombre: String,
  apellido: String,
  rut: String,
  mail: String,
  consulta: String,
  fechaSolicitud: Date,
});
