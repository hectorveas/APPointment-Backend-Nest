import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePatientDTO } from './dto/patient.dto';
import { Patient } from './interfaces/patient.interface';

@Injectable()
export class PatientService {
  constructor(
    @InjectModel('Patient') private readonly patientModel: Model<Patient>,
  ) {}

  async createPatient(createPatientDTO: CreatePatientDTO): Promise<Patient> {
    const newPatient = new this.patientModel(createPatientDTO);
    return newPatient.save();
  }

  async getPatients(): Promise<Patient[]> {
    const patients = await this.patientModel.find();
    return patients;
  }

  async getPatient(id: string): Promise<Patient> {
    const patient = await this.patientModel.findById(id);
    return patient;
  }

  async deletePatient(id: string): Promise<any> {
    const patient = await this.patientModel.findByIdAndDelete(id);
    return patient;
  }

  async updatePatient(
    id: string,
    createPatientDTO: CreatePatientDTO,
  ): Promise<Patient> {
    const updatedPatient = await this.patientModel.findByIdAndUpdate(
      id,
      createPatientDTO,
      { new: true },
    );
    return updatedPatient;
  }
}
