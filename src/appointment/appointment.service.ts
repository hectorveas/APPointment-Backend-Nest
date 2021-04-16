import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAppointmentDTO } from './dto/appointment.dto';
import { Appointment } from './interfaces/appointment.interface'


@Injectable()
export class AppointmentService {

    constructor(@InjectModel('Product') private readonly productModel: Model<Appointment>) {}

    // Post a single product
    async createAppointment(createAppointmentDTO: CreateAppointmentDTO): Promise<Appointment> {
        const newProduct = new this.productModel(createAppointmentDTO);
        return newProduct.save();
    }

}
