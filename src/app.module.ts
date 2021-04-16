import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactController } from './contact/contact.controller';
import { PersonalContactController } from './personal-contact/personal-contact.controller';
import { DoctorController } from './doctor/doctor.controller';
import { PatientController } from './patient/patient.controller';
import { AppointmentModule } from './appointment/appointment.module';
import { ContactService } from './contact/contact.service';
import { ContactModule } from './contact/contact.module';
import { PersonalContactService } from './personal-contact/personal-contact.service';
import { PersonalContactModule } from './personal-contact/personal-contact.module';
import { DoctorService } from './doctor/doctor.service';
import { DoctorModule } from './doctor/doctor.module';
import { PatientService } from './patient/patient.service';
import { PatientModule } from './patient/patient.module';

@Module({
  imports: [AppointmentModule, ContactModule, PersonalContactModule, DoctorModule, PatientModule],
  controllers: [AppController, ContactController, PersonalContactController, DoctorController, PatientController],
  providers: [AppService, ContactService, PersonalContactService, DoctorService, PatientService],
})
export class AppModule {}
