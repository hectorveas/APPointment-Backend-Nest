import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res } from '@nestjs/common';
import { CreatePersonalContactDTO } from './dto/personal-contact.dto';
import { PersonalContactService } from './personal-contact.service';

@Controller('personalContact')
export class PersonalContactController {

    constructor(private personalContactService: PersonalContactService) { }

    @Post()
    async createPersonalContact(@Res() res, @Body() createPersonalContactDTO: CreatePersonalContactDTO) {
        const personalContact = await this.personalContactService.createPersonalContact(createPersonalContactDTO);
        return res.status(HttpStatus.OK).json({
            message: 'PersonalContact Successfully Created',
            personalContact
        });
    }

    @Get()
    async getPersonalContact(@Res() res) {
        const personalContact = await this.personalContactService.getPersonalContacts();
        return res.status(HttpStatus.OK).json(personalContact);
    }

    @Get('/:id')
    async getProduct(@Res() res, @Param('id') id) {
        const personalContact = await this.personalContactService.getPersonalContact(id);
        if (!personalContact) throw new NotFoundException('PersonalContact does not exist!');
        return res.status(HttpStatus.OK).json(personalContact);
    }

    @Delete()
    async deletePersonalContact(@Res() res, @Query('id') id) {
        const personalContact = await this.personalContactService.deletePersonalContact(id);
        if (!personalContact) throw new NotFoundException('PersonalContact does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'PersonalContact Deleted Successfully',
            personalContact
        });
    }

    @Put()
    async updatePersonalContact(@Res() res, @Body() createPersonalContactDTO: CreatePersonalContactDTO, @Query('id') id) {
        const personalContact = await this.personalContactService.updatePersonalContact(id, createPersonalContactDTO);
        if (!personalContact) throw new NotFoundException('Product does not exist!');
        return res.status(HttpStatus.OK).json({
            message: 'PersonalContact Updated Successfully',
            personalContact
        });
    }
}
