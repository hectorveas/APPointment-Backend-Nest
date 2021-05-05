import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  Res,
} from '@nestjs/common';
import { CreatePatientDTO } from './dto/patient.dto';
import { PatientService } from './patient.service';

@Controller('patient')
export class PatientController {
  constructor(private patientService: PatientService) {}

  @Post()
  async createPatient(@Res() res, @Body() createPatientDTO: CreatePatientDTO) {
    const patient = await this.patientService.createPatient(createPatientDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Patient Successfully Created',
      patient,
    });
  }

  @Get()
  async getPatient(@Res() res) {
    const patient = await this.patientService.getPatients();
    return res.status(HttpStatus.OK).json(patient);
  }

  @Get('/:id')
  async getProduct(@Res() res, @Param('id') id) {
    const patient = await this.patientService.getPatient(id);
    if (!patient) throw new NotFoundException('Patient does not exist!');
    return res.status(HttpStatus.OK).json(patient);
  }

  @Delete()
  async deletePatient(@Res() res, @Query('id') id) {
    const patient = await this.patientService.deletePatient(id);
    if (!patient) throw new NotFoundException('Patient does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Patient Deleted Successfully',
      patient,
    });
  }

  @Put()
  async updatePatient(
    @Res() res,
    @Body() createPatientDTO: CreatePatientDTO,
    @Query('id') id,
  ) {
    const patient = await this.patientService.updatePatient(
      id,
      createPatientDTO,
    );
    if (!patient) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Patient Updated Successfully',
      patient,
    });
  }
}
