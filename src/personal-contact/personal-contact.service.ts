import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePersonalContactDTO } from './dto/personal-contact.dto';
import { PersonalContact } from './interfaces/personal-contact.interface';

@Injectable()
export class PersonalContactService {
  constructor(
    @InjectModel('PersonalContact')
    private readonly personalContactModel: Model<PersonalContact>,
  ) {}

  async createPersonalContact(
    createPersonalContactDTO: CreatePersonalContactDTO,
  ): Promise<PersonalContact> {
    const newPersonalContact = new this.personalContactModel(
      createPersonalContactDTO,
    );
    return newPersonalContact.save();
  }

  async getPersonalContacts(): Promise<PersonalContact[]> {
    const personalContacts = await this.personalContactModel.find();
    return personalContacts;
  }

  async getPersonalContact(id: string): Promise<PersonalContact> {
    const personalContact = await this.personalContactModel.findById(id);
    return personalContact;
  }

  async deletePersonalContact(id: string): Promise<any> {
    const personalContact = await this.personalContactModel.findByIdAndDelete(
      id,
    );
    return personalContact;
  }

  async updatePersonalContact(
    id: string,
    createPersonalContactDTO: CreatePersonalContactDTO,
  ): Promise<PersonalContact> {
    const updatedPersonalContact = await this.personalContactModel.findByIdAndUpdate(
      id,
      createPersonalContactDTO,
      { new: true },
    );
    return updatedPersonalContact;
  }
}
