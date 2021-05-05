import { Schema } from 'mongoose';

export const PatientSchema = new Schema({
  //__id?: string;
  nombrePaciente: String,
  apellidoPaciente: String,
  rut: String,
  email: String,
  fono: String,
  contrasena: String,
  createdAt: { type: Date, default: Date.now },
});
