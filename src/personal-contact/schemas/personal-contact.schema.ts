import { Schema } from "mongoose";

export const PersonalContactSchema = new Schema ({
    //_id: string;
    nombrePaciente: String,
    rut: String,
    email: String,
    contrasena: String,
    telefono: String,
    confirmacion: Boolean,
    fechaSolicitud: Date
})
  