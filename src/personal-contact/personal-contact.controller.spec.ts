import { Test, TestingModule } from '@nestjs/testing';
import { PersonalContactController } from './personal-contact.controller';

describe('PersonalContactController', () => {
  let controller: PersonalContactController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonalContactController],
    }).compile();

    controller = module.get<PersonalContactController>(PersonalContactController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
