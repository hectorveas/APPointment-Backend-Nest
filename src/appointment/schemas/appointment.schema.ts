import { Schema } from "mongoose";

export const AppointmentSchema = new Schema({
    paciente: String,
    fechaConsulta: Date,
    descripcion: String,
    estadoCita: String,
    motivoCancelacion: String,
    personaCancelar: String
});

