import { Test, TestingModule } from '@nestjs/testing';
import { PersonalContactService } from './personal-contact.service';

describe('PersonalContactService', () => {
  let service: PersonalContactService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonalContactService],
    }).compile();

    service = module.get<PersonalContactService>(PersonalContactService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
