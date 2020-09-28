import { async, fakeAsync, inject, TestBed } from '@angular/core/testing';

import { ExampleService } from './example.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Example } from './example';

const topic: any = {
  id: 1,
  risk: 2,
};

const example: Example = {
  data: {
    text: '[DELETED]',
  },
  queueItem: {
    clientId: -1,
    comments: [],
    contentId: '',
    dateCreated: 0,
    decisions: [],
    language: { language: '' },
    prediction: [],
    priority: -1,
    pseudonymizedDate: -1,
    redacted: {},
    reviewsNeeded: 0,
    simplified: '',
    tags: [],
    topics: [topic],
  },
};

const language = {
  language: 'en',
};

describe('ExampleService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    }).compileComponents();
  }));

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExampleService = TestBed.inject(ExampleService);
    expect(service).toBeTruthy();
  });

  it('should delete the example', fakeAsync(
    inject([HttpClient], (http: HttpClient) => {
      spyOn(http, 'delete').and.callFake(() => {
        return {
          pipe: () => {
            return;
          },
        };
      });
      const service: ExampleService = TestBed.inject(ExampleService);
      service.deleteExample(example, 61, 'en');
      expect(http.delete).toBeCalledTimes(1);
      expect(http.delete).toBeCalledWith('/mock-api/v2/examples/');
    })
  ));

  it('should change text the example', async () => {
    const service: ExampleService = TestBed.inject(ExampleService);
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
    expect(example.data.text).toBe('[DELETED]');

    const result = await service.redactExample(example);

    expect(result.data.text).toBe('[REDACTED]');
    expect(consoleWarnSpy).toBeCalledWith('Not implemented');

    consoleWarnSpy.mockRestore();
  });

  it('should find the example', fakeAsync(
    inject([HttpClient], (http: HttpClient) => {
      spyOn(http, 'get').and.callFake(() => {
        return {
          toPromise: () => {
            return {
              total: 1,
              items: [example],
            };
          },
        };
      });
      const service: ExampleService = TestBed.inject(ExampleService);
      service.searchExamples('test', language, 61).then((examples) => {
        expect(http.get).toBeCalledWith(
          '/mock-api/v2/inbox/queue/examples/items',
          {
            params: {
              cloneFrom: {
                cloneFrom: null,
                encoder: {},
                map: null,
                updates: null,
              },
              encoder: {},
              map: null,
              updates: [
                { op: 's', param: 'clientIds', value: '61' },
                { op: 's', param: 'language', value: 'en' },
                { op: 's', param: 'offset', value: '0' },
                { op: 's', param: 'limit', value: '50' },
                { op: 's', param: 'text', value: 'test' },
              ],
            },
          }
        );
        const expectedExample: any = { ...example };
        expectedExample.queueItem.topics = [
          { id: 0, risk: { id: 1, risk: 2 } },
        ];
        expect(examples).toEqual({
          total: 1,
          items: [expectedExample],
        });
      });
    })
  ));
});
