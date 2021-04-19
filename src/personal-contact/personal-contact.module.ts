import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonalContactController } from './personal-contact.controller';
import { PersonalContactService } from './personal-contact.service';
import { PersonalContactSchema } from './schemas/personal-contact.schema';

@Module({
    imports: [MongooseModule.forFeature([{name: 'PersonalContact', schema: PersonalContactSchema}])],
    providers: [PersonalContactService],
    controllers: [PersonalContactController]
})
export class PersonalContactModule {}
