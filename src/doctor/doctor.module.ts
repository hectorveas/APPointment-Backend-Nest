import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DoctorController } from './doctor.controller';
import { DoctorService } from './doctor.service';
import { DoctorSchema } from './schemas/doctor.shema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Doctor', schema: DoctorSchema }]),
  ],
  providers: [DoctorService],
  controllers: [DoctorController],
})
export class DoctorModule {}
