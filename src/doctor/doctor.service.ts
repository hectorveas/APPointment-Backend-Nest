import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateDoctorDTO } from './dto/doctor.dto';
import { Doctor } from './interfaces/doctor.interface';

@Injectable()
export class DoctorService {

    constructor(@InjectModel('Doctor') private readonly doctorModel: Model<Doctor>) {}

    async createDoctor(createDoctorDTO: CreateDoctorDTO): Promise<Doctor> {
        const newDoctor = new this.doctorModel(createDoctorDTO);
        return newDoctor.save();
    }

    async getDoctors(): Promise<Doctor[]> {
        const doctors = await this.doctorModel.find();
        return doctors;
    }

    async getDoctor(id: string): Promise<Doctor> {
        const doctor = await this.doctorModel.findById(id); 
        return doctor;
    }

    async deleteDoctor(id: string): Promise<any> {
        const doctor = await this.doctorModel.findByIdAndDelete(id);
        return doctor;
    }

    async updateDoctor(id: string, createDoctorDTO: CreateDoctorDTO): Promise<Doctor> {
        const updatedDoctor = await this.doctorModel
            .findByIdAndUpdate(id, createDoctorDTO, { new: true });
        return updatedDoctor;
    }   
}
