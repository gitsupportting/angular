import { BaseQueueService } from './base-queue.service';
import { LocalStorageService } from '../shared/services/storage/local-storage.service';
import { SessionStorageService } from '../shared/services/storage/session-storage.service';
import { Observable, from } from 'rxjs';
import { GetQueueInfoApiResponse } from './interfaces/get-queue-info-api-response.interface';

describe('BaseQueueService', () => {
  let userService: {
    me: jest.Mock<Promise<void>, []>;
    preferences?: {
      language: string;
      lastClientId: number;
    };
  };

  let queueApiService: {
    getQueueInfo: jest.Mock<Observable<GetQueueInfoApiResponse>, [string]>;
  };

  beforeEach(() => {
    userService = {
      me: jest.fn(() => Promise.resolve()),
      preferences: {
        language: 'en',
        lastClientId: 60,
      },
    };

    queueApiService = {
      getQueueInfo: jest.fn((queueName: string) => {
        const queueInfo: GetQueueInfoApiResponse = {
          name: 'Test Queue',
          filters: [],
          queueId: queueName,
          schema: {},
          params: [],
          tags: {
            contentType: [],
            labelGroups: [],
          },
        };
        return from([queueInfo]);
      }),
    };
  });

  it('should create', () => {
    const baseQueueService = new BaseQueueService(
      'test',
      {} as any,
      queueApiService as any,
      userService as any,
      new LocalStorageService(),
      new SessionStorageService()
    );
    expect(baseQueueService).toBeTruthy();
  });
});
