export class CreatePersonalContactDTO {
  //_id: string;
  readonly nombrePaciente: string;
  readonly rut: string;
  readonly email: string;
  readonly contrasena: string;
  readonly telefono: string;
  readonly confirmacion?: boolean;
  readonly fechaSolicitud: Date;
}
