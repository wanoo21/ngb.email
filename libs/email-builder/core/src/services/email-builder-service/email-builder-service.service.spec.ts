import { Test, TestingModule } from '@nestjs/testing';
import { AIPEmailBuilderService } from './email-builder.service';

class TestAIPEmailBuilderServiceService extends AIPEmailBuilderService {}

describe('AIPEmailBuilderServiceService', () => {
  let service: TestAIPEmailBuilderServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestAIPEmailBuilderServiceService],
    }).compile();

    service = module.get<TestAIPEmailBuilderServiceService>(
      TestAIPEmailBuilderServiceService
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
