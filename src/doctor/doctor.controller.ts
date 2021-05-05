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
import { DoctorService } from './doctor.service';
import { CreateDoctorDTO } from './dto/doctor.dto';

@Controller('doctor')
export class DoctorController {
  constructor(private doctorService: DoctorService) {}

  @Post()
  async createDoctor(@Res() res, @Body() createDoctorDTO: CreateDoctorDTO) {
    const doctor = await this.doctorService.createDoctor(createDoctorDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Doctor Successfully Created',
      doctor,
    });
  }

  @Get()
  async getDoctor(@Res() res) {
    const doctor = await this.doctorService.getDoctors();
    return res.status(HttpStatus.OK).json(doctor);
  }

  @Get('/:id')
  async getProduct(@Res() res, @Param('id') id) {
    const doctor = await this.doctorService.getDoctor(id);
    if (!doctor) throw new NotFoundException('Doctor does not exist!');
    return res.status(HttpStatus.OK).json(doctor);
  }

  @Delete()
  async deleteDoctor(@Res() res, @Query('id') id) {
    const doctor = await this.doctorService.deleteDoctor(id);
    if (!doctor) throw new NotFoundException('Doctor does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Doctor Deleted Successfully',
      doctor,
    });
  }

  @Put()
  async updateDoctor(
    @Res() res,
    @Body() createDoctorDTO: CreateDoctorDTO,
    @Query('id') id,
  ) {
    const doctor = await this.doctorService.updateDoctor(id, createDoctorDTO);
    if (!doctor) throw new NotFoundException('Product does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Doctor Updated Successfully',
      doctor,
    });
  }
}
