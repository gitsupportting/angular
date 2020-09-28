import { QueueApiService } from './queue-api.service';
import { User, UserPreferences } from '../shared-components/user';
import { CreateQueueItemDecision } from './interfaces/create-queue-item-decision.interface';
import { AuditQueueItem } from './interfaces/audit-queue-item.interface';
import { ITopic, QueueItem } from '../shared-components/interfaces';
import { from } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { GetQueueItemsAPIResponse } from './interfaces/get-queue-items-api-response.interface';

const makeFakeId = (() => {
  let counter = 0;
  return () => `fake-item-${++counter}`;
})();

function generateQueueItem(item: {
  topics: ITopic[];
  tags: string[];
  contentId?: string;
  clientId?: number;
}): QueueItem {
  return {
    clientId: 60,
    comments: [],
    contentId: makeFakeId(),
    dateCreated: 1588277471675,
    language: { language: 'en' },
    priority: 1,
    redacted: '',
    reviewsNeeded: 1,
    simplified: 'string',
    decisions: [],
    ...item,
  };
}

const testItems: {
  item: AuditQueueItem;
  decision;
}[] = [
  {
    item: {
      data: {},
      queueItem: generateQueueItem({
        topics: [
          {
            id: 0,
            risk: 2,
          },
        ],
        tags: ['COMMON', 'NIFTY', 'CORRECT'],
      }),
      changes: {
        generalRisk: 2,
        topics: [
          {
            id: 0,
            risk: 2,
          },
        ],
        tags: ['COMMON', 'NIFTY', 'CORRECT'],
        extras: {},
      },
    },
    decision: {
      tags: [],
      tagsRemoved: [],
      reviewedTopics: { 0: 2 },
      correctTopics: { 0: 2 },
    },
  },
  {
    item: {
      data: {},
      queueItem: generateQueueItem({
        topics: [{ id: 0, risk: 2 }],
        tags: ['COMMON', 'NIFTY', 'CORRECT'],
      }),
      changes: {
        generalRisk: 5,
        topics: [
          { id: 0, risk: 5 },
          { id: 1, risk: 5 },
        ],
        tags: ['COMMON', 'NIFTY', 'WRONG', 'WRONG.FIX_TOPICS'],
        extras: {},
      },
    },
    decision: {
      tags: ['WRONG', 'WRONG.FIX_TOPICS'],
      tagsRemoved: ['CORRECT'],
      reviewedTopics: { 0: 2 },
      correctTopics: { 0: 5, 1: 5 },
    },
  },
  {
    item: {
      data: {},
      queueItem: generateQueueItem({
        topics: [{ id: 0, risk: 2 }],
        tags: ['COMMON', 'NIFTY', 'CORRECT'],
      }),
      changes: {
        generalRisk: 2,
        topics: [
          { id: 0, risk: 2 },
          { id: 10, risk: 1 },
        ],
        tags: ['COMMON', 'WRONG', 'WRONG.FIX_TOPICS'],
        extras: {},
      },
    },
    decision: {
      tags: ['WRONG', 'WRONG.FIX_TOPICS'],
      tagsRemoved: ['NIFTY', 'CORRECT'],
      reviewedTopics: { 0: 2 },
      correctTopics: { 0: 2, 10: 1 },
    },
  },
];

describe('QueueApiService', () => {
  let queueApiService: QueueApiService;
  let userService: {
    me: jest.Mock<Promise<User>, []>;
    preferences: UserPreferences;
  };
  let httpMock: {
    get: jest.Mock;
    post: jest.Mock;
    put: jest.Mock;
    delete: jest.Mock;
  };
  let testUser: User;

  beforeEach(() => {
    testUser = {
      moderatorId: 'oscar.the.grouch@sesamestreet.io',
      id: '12345',
      name: {
        givenName: 'Oscar',
        familyName: 'Thegrouch',
      },
      displayName: 'Oscar',
      email: 'oscar.the.grouch@sesamestreet.io',
    };

    userService = {
      me: jest.fn(() => Promise.resolve(testUser)),
      preferences: {
        language: 'en',
        lastClientId: 60,
      },
    };

    httpMock = {
      get: jest.fn(),
      post: jest.fn(),
      put: jest.fn(),
      delete: jest.fn(),
    };

    queueApiService = new QueueApiService(httpMock as any, userService as any);
  });

  it('should create', () => {
    expect(queueApiService).toBeTruthy();
  });

  describe('#getQueueInfo', () => {
    let encoderSpy: jest.SpyInstance<string, [string | number | boolean]>;

    beforeEach(() => {
      encoderSpy = jest.spyOn(window, 'encodeURIComponent');
    });

    afterEach(() => {
      encoderSpy.mockRestore();
    });

    it('should GET the queue info from the inbox API', () => {
      const queueName = 'test';
      queueApiService.getQueueInfo(queueName);

      expect(httpMock.get).toHaveBeenCalledTimes(1);
      expect(httpMock.get).toHaveBeenCalledWith(
        '/mock-api/v2/inbox/queue/test'
      );
    });

    it('should encode the queue name', () => {
      encoderSpy.mockImplementation(() => 'encoded');
      const queueName = 'test?';
      queueApiService.getQueueInfo(queueName);

      expect(encoderSpy).toHaveBeenCalledWith(queueName);

      expect(httpMock.get).toHaveBeenCalledTimes(1);
      expect(httpMock.get).toHaveBeenCalledWith(
        '/mock-api/v2/inbox/queue/encoded'
      );
    });
  });

  describe('#getItems', () => {
    beforeEach(() => {
      httpMock.get.mockImplementation(() =>
        from(
          Promise.resolve({
            total: 10,
            items: [],
          })
        )
      );
    });

    it('should GET the queue items from the API', (done) => {
      queueApiService.getItems('test', {}).subscribe(() => {
        expect(httpMock.get).toHaveBeenCalledTimes(1);
        expect(httpMock.get).toHaveBeenCalledWith(
          '/mock-api/v2/inbox/queue/test/items',
          expect.objectContaining({
            params: expect.any(Object),
          })
        );
        done();
      });
    });

    describe('query params', () => {
      it('should set the correct default query params', async () => {
        await queueApiService.getItems('test', {}).toPromise();
        expect(httpMock.get).toHaveBeenCalledTimes(1);

        const params: HttpParams = httpMock.get.mock.calls[0][1].params;
        expect(params.keys()).toHaveLength(3);

        const queryString = params.toString();
        expect(queryString).toMatch('language=en');
        expect(queryString).toMatch('checkoutAvailable=true');
        expect(queryString).toMatch('clientIds=60');
      });

      describe('lanugage', () => {
        it.each([['en'], ['es'], ['fr']])(
          'should set the language query param',
          async (language) => {
            expect.hasAssertions();
            await queueApiService.getItems('test', { language }).toPromise();

            expect(httpMock.get).toHaveBeenCalledTimes(1);
            const params: HttpParams = httpMock.get.mock.calls[0][1].params;
            const queryString = params.toString();
            expect(queryString).toMatch(`language=${language}`);
          }
        );

        it.each([['en'], ['es'], ['fr']])(
          'should should fall back on user preferences',
          async (language) => {
            expect.hasAssertions();

            userService.preferences = {
              language,
            };
            await queueApiService.getItems('test', {}).toPromise();

            expect(httpMock.get).toHaveBeenCalledTimes(1);
            const params: HttpParams = httpMock.get.mock.calls[0][1].params;
            const queryString = params.toString();
            expect(queryString).toMatch(`language=${language}`);
          }
        );

        it('should default to en', async () => {
          expect.hasAssertions();

          userService.preferences = {};
          await queueApiService.getItems('test', {}).toPromise();

          expect(httpMock.get).toHaveBeenCalledTimes(1);
          const params: HttpParams = httpMock.get.mock.calls[0][1].params;
          const queryString = params.toString();
          expect(queryString).toMatch('language=en');
        });
      });

      describe('clientIds', () => {
        it('should not be set if no argument is passed and lastClientId is not set in user preferences', async () => {
          expect.hasAssertions();

          userService.preferences = {};
          await queueApiService.getItems('test', {}).toPromise();

          expect(httpMock.get).toHaveBeenCalledTimes(1);
          let params: HttpParams = httpMock.get.mock.calls[0][1].params;
          expect(params.has('clientIds')).toBe(false);

          await queueApiService
            .getItems('test', {
              clientIds: [],
            })
            .toPromise();

          expect(httpMock.get).toHaveBeenCalledTimes(2);
          params = httpMock.get.mock.calls[1][1].params;
          expect(params.has('clientIds')).toBe(false);
        });

        it.each([[0], [1], [2], [60], [104]])(
          'should default to the lastClientId in user preferences',
          async (lastClientId) => {
            expect.hasAssertions();
            userService.preferences = {
              lastClientId,
            };
            await queueApiService.getItems('test', {}).toPromise();

            expect(httpMock.get).toHaveBeenCalledTimes(1);

            const params: HttpParams = httpMock.get.mock.calls[0][1].params;
            const queryString = params.toString();
            expect(queryString).toMatch(`clientIds=${lastClientId}`);
          }
        );
      });

      it.each([
        [false, true, 'true'],
        [false, null, 'true'],
        [false, false, 'false'],
        [true, true, 'false'],
        [true, null, 'false'],
        [true, false, 'false'],
      ])(
        'should set the checkoutAvailable param if checkout is falsy',
        async (checkout, checkoutAvailable, expected) => {
          expect.hasAssertions();
          await queueApiService
            .getItems('items', {
              checkout,
              checkoutAvailable,
            })
            .toPromise();
          const params: HttpParams = httpMock.get.mock.calls[0][1].params;

          if (checkout) {
            expect(params.has('checkoutAvailable')).toBe(false);
          } else {
            const queryString = params.toString();
            expect(queryString).toMatch(`checkoutAvailable=${expected}`);
          }
        }
      );

      it('should not set contentIds if it is falsy or an empty array', async () => {
        expect.hasAssertions();
        await queueApiService.getItems('items', {}).toPromise();
        let params: HttpParams = httpMock.get.mock.calls[0][1].params;
        expect(params.has('contentIds')).toBe(false);

        await queueApiService
          .getItems('items', {
            contentIds: [],
          })
          .toPromise();

        params = httpMock.get.mock.calls[1][1].params;
        expect(params.has('contentIds')).toBe(false);
      });

      it('should not set notContentIds if contentIds is set', async () => {
        expect.hasAssertions();
        await queueApiService
          .getItems('items', {
            contentIds: ['test'],
            notContentIds: ['another-item'],
          })
          .toPromise();
        const params: HttpParams = httpMock.get.mock.calls[0][1].params;
        expect(params.has('notContentIds')).toBe(false);
        const queryString = params.toString();
        expect(queryString).not.toMatch('notContentIds=');
      });

      it('should not set notContentIds if it is an empty array', async () => {
        expect.hasAssertions();
        await queueApiService
          .getItems('items', {
            notContentIds: [],
          })
          .toPromise();
        const params: HttpParams = httpMock.get.mock.calls[0][1].params;
        expect(params.has('notContentIds')).toBe(false);
        const queryString = params.toString();
        expect(queryString).not.toMatch('notContentIds=');
      });

      it.each([
        ['clientIds', [0, 10, 60], '0%2C10%2C60'],
        ['clientIds', [1], '1'],
        ['clientIds', [13, 162, 7], '13%2C162%2C7'],
        ['checkout', true, 'true'],
        ['checkout', false, 'false'],
        ['contentIds', ['test_str'], 'test_str'],
        ['contentIds', ['fake-1', 'other-id'], 'fake-1%2Cother-id'],
        [
          'contentIds',
          ['test_str', 'fake-1', 'other-id'],
          'test_str%2Cfake-1%2Cother-id',
        ],
        ['notContentIds', ['test_str'], 'test_str'],
        ['notContentIds', ['fake-1', 'other-id'], 'fake-1%2Cother-id'],
        [
          'notContentIds',
          ['test_str', 'fake-1', 'other-id'],
          'test_str%2Cfake-1%2Cother-id',
        ],
        ['text', 'value', 'value'],
        ['text', 'something else', 'something%20else'],
        ['offset', 10, '10'],
        ['offset', 4, '4'],
        ['offset', 105, '105'],
        ['limit', 1, '1'],
        ['limit', 10, '10'],
        ['limit', 3, '3'],
        ['sortBy', 'FIFO', 'FIFO'],
        ['sortBy', 'Recent', 'Recent'],
        ['sortBy', 'Priority', 'Priority'],
        ['sortBy', 'AI', 'AI'],
      ])('should set %s', async (param, input, expected) => {
        expect.hasAssertions();
        await queueApiService
          .getItems('items', {
            [param]: input,
          })
          .toPromise();
        const params: HttpParams = httpMock.get.mock.calls[0][1].params;
        expect(params.toString()).toMatch(`${param}=${expected}`);
      });
    });

    it('should transform the response into Audit Queue Items', async () => {
      expect.hasAssertions();

      httpMock.get.mockImplementationOnce(() => {
        const response: GetQueueItemsAPIResponse<any> = {
          total: 10,
          items: [
            {
              data: {},
              queueItem: {
                clientId: 10,
                comments: [],
                contentId: 'test-id',
                dateCreated: 1589239429830,
                decisions: [],
                language: {
                  language: 'en',
                },
                priority: 1,
                redacted: {},
                reviewsNeeded: 3,
                simplified: 'simplified text',
                topics: {
                  0: 2,
                },
              },
            },
            {
              data: {},
              queueItem: {
                clientId: 10,
                comments: [],
                contentId: 'test-id',
                dateCreated: 1589239429830,
                decisions: [],
                language: {
                  language: 'fr',
                },
                priority: 2,
                redacted: {},
                reviewsNeeded: 3,
                simplified: 'simplified text',
                tags: ['SAMPLE'],
                topics: {
                  0: 5,
                  11: 3,
                },
              },
            },
          ],
        };
        return from(Promise.resolve(response));
      });

      const result = await queueApiService
        .getItems<any>('test', {})
        .toPromise();
      expect(result.total).toEqual(10);
      expect(result.items).toEqual([
        {
          data: {},
          queueItem: {
            clientId: 10,
            comments: [],
            contentId: 'test-id',
            dateCreated: 1589239429830,
            decisions: [],
            language: {
              language: 'en',
            },
            priority: 1,
            redacted: {},
            reviewsNeeded: 3,
            simplified: 'simplified text',
            tags: [],
            topics: [{ id: 0, risk: 2 }],
          },
          changes: {
            generalRisk: 2,
            topics: [{ id: 0, risk: 2 }],
            tags: [],
            extras: {},
          },
        },
        {
          data: {},
          queueItem: {
            clientId: 10,
            comments: [],
            contentId: 'test-id',
            dateCreated: 1589239429830,
            decisions: [],
            language: {
              language: 'fr',
            },
            priority: 2,
            redacted: {},
            reviewsNeeded: 3,
            simplified: 'simplified text',
            tags: ['SAMPLE'],
            topics: [
              { id: 0, risk: 5 },
              { id: 11, risk: 3 },
            ],
          },
          changes: {
            generalRisk: 5,
            topics: [
              { id: 0, risk: 5 },
              { id: 11, risk: 3 },
            ],
            tags: ['SAMPLE'],
            extras: {},
          },
        },
      ]);
    });
  });

  describe('#addDecisions', () => {
    let addDecisionSpy: jest.SpyInstance<
      Promise<boolean>,
      [string, string, CreateQueueItemDecision]
    >;
    beforeEach(() => {
      addDecisionSpy = jest
        .spyOn(queueApiService, 'addDecision')
        .mockImplementation(async () => true);
    });

    it('calls `addDecision` for each queue item', () => {
      const queueName = 'test';
      const seconds = 30;
      queueApiService.addDecisions(
        queueName,
        seconds,
        testItems.map(({ item }) => item)
      );

      expect(addDecisionSpy).toHaveBeenCalledTimes(3);

      for (const { item } of testItems) {
        expect(addDecisionSpy).toHaveBeenCalledWith(
          queueName,
          item.queueItem.contentId,
          expect.anything()
        );
      }
    });

    it('creates decisions from the queue items', () => {
      const queueName = 'test';
      const seconds = 30;
      const secondsPerItem = 10;
      queueApiService.addDecisions(
        queueName,
        seconds,
        testItems.map(({ item }) => item)
      );

      expect(addDecisionSpy).toHaveBeenCalledTimes(3);

      for (const testItem of testItems) {
        expect(addDecisionSpy).toHaveBeenCalledWith(
          queueName,
          testItem.item.queueItem.contentId,
          expect.objectContaining({
            timestamp: expect.any(Number),
            seconds: secondsPerItem,
            ...testItem.decision,
          })
        );
      }
    });

    it('returns true if add decision returns true for every queue item', async () => {
      expect.hasAssertions();

      const result = await queueApiService.addDecisions(
        'test',
        30,
        testItems.map(({ item }) => item)
      );

      expect(result).toBe(true);
    });

    it('returns false if add decision returns false for any queue item', async () => {
      expect.hasAssertions();
      const queueName = 'test';
      const seconds = 30;

      addDecisionSpy.mockImplementation(
        async (queueName, contentId) => contentId !== 'error'
      );

      const result = await queueApiService.addDecisions(
        queueName,
        seconds,
        testItems.map(({ item }, index) => ({
          ...item,
          queueItem: {
            ...item.queueItem,
            contentId: index === 1 ? 'error' : item.queueItem.contentId,
          },
        }))
      );

      expect(result).toBe(false);
    });
  });

  describe('#addDecision', () => {
    beforeEach(() => {
      httpMock.post.mockImplementation(() => {
        const res = { success: true };
        return from(Promise.resolve(res));
      });
    });

    it.each([
      [
        'test',
        'pretend-content-id',
        '/mock-api/v2/inbox/queue/test/items/pretend-content-id/decision',
      ],
      [
        'fakeQueue',
        'whatId',
        '/mock-api/v2/inbox/queue/fakeQueue/items/whatId/decision',
      ],
    ])(
      'POSTs the decision for the queue item',
      async (queueName, contentId, expectedPath) => {
        expect.hasAssertions();
        const testDecision: any = { foo: 'bar' };

        await queueApiService.addDecision(queueName, contentId, testDecision);

        expect(httpMock.post).toHaveBeenCalledTimes(1);
        expect(httpMock.post).toHaveBeenCalledWith(
          expect.stringContaining(expectedPath),
          expect.objectContaining(testDecision)
        );
      }
    );

    it('Adds the moderator ID of the current user to the decision', async () => {
      expect.hasAssertions();
      const testDecision: any = { foo: 'bar' };

      await queueApiService.addDecision('test', 'fakeContentId', testDecision);

      expect(httpMock.post).toHaveBeenCalledTimes(1);
      expect(httpMock.post).toHaveBeenCalledWith(expect.any(String), {
        foo: 'bar',
        moderatorId: testUser.moderatorId,
      });
    });
  });
});
