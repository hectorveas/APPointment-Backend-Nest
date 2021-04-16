import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { CreateAppointmentDTO } from './dto/appointment.dto';



@Controller('appointment')
export class AppointmentController {

    constructor(private appointmentService: AppointmentService) { }

        // Add Appointment: /appointment/create
        @Post('/create')
        async createProduct(@Res() res, @Body() createAppointmentDTO: CreateAppointmentDTO) {
            const product = await this.appointmentService.createAppointment(createAppointmentDTO);
            return res.status(HttpStatus.OK).json({
                message: 'Product Successfully Created',
                product
            });
        }
    
}
