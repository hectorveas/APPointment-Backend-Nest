import { Schema } from 'mongoose';

export const DoctorSchema = new Schema({
  //_id: string,
  nombreDoctor: String,
  apellidoDoctor: String,
  rut: String,
  email: String,
  fono: String,
  contrasena: String,
  especialidad: String,
});
