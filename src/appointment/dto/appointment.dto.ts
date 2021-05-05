export class CreateAppointmentDTO {
  //_id?: string;
  readonly paciente: string;
  readonly fechaConsulta: Date;
  readonly descripcion: string;
  readonly estadoCita: string;
  readonly motivoCancelacion?: string;
  readonly personaCancelar?: string;
}
