import { Module } from '@nestjs/common';
import { AppointmentController } from './appointment.controller';
import { AppointmentService } from './appointment.service';

@Module({
    imports: [],
    providers: [AppointmentService],
    controllers: [AppointmentController]
})
export class AppointmentModule {}
