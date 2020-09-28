import { BaseQueueComponent } from './base-queue.component';
import { QueueItemExtras } from '../shared-components/interfaces';

interface TestQueueData {
  text: string;
}

class TestQueueComponent extends BaseQueueComponent<TestQueueData> {}

describe('BaseQueueComponent', () => {
  let component: TestQueueComponent;
  let queueService: {
    queueItems$: { subscribe: jest.Mock };
    nextPage$: { subscribe: jest.Mock };
    loadInitialItems: jest.Mock;
    completePage: jest.Mock;
    isReviewing: any;
    isLoading: any;
    queueInfo?: {
      tags: any;
    };
    minimizeTopics: any;
  };
  let queueItemsSubscription: { unsubscribe: jest.Mock };
  let nextPageSubscription: { unsubscribe: jest.Mock };

  beforeEach(() => {
    queueItemsSubscription = { unsubscribe: jest.fn() };
    nextPageSubscription = { unsubscribe: jest.fn() };

    queueService = {
      queueItems$: {
        subscribe: jest.fn(() => queueItemsSubscription),
      },
      nextPage$: {
        subscribe: jest.fn(() => nextPageSubscription),
      },
      loadInitialItems: jest.fn(),
      completePage: jest.fn(),
      isReviewing: false,
      isLoading: false,
      queueInfo: null,
      minimizeTopics: true,
    };

    component = new TestQueueComponent(queueService as any);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getters', () => {
    test('isReviewing should return queueService.isReviewing', () => {
      expect(component.isReviewing).toBe(queueService.isReviewing);
      queueService.isReviewing = {};
      expect(component.isReviewing).toBe(queueService.isReviewing);
    });

    test('isLoading should return queueService.isLoading', () => {
      expect(component.isLoading).toBe(queueService.isLoading);
      queueService.isLoading = {};
      expect(component.isLoading).toBe(queueService.isLoading);
    });

    test('tagInfo should return queueService.queueInfo.tags', () => {
      queueService.queueInfo = null;
      expect(component.tagInfo == null).toBe(true);

      queueService.queueInfo = { tags: {} };
      expect(component.tagInfo).toBe(queueService.queueInfo.tags);
    });

    test('minimizeTopics should return queueService.minimizeTopics', () => {
      expect(component.minimizeTopics).toBe(queueService.minimizeTopics);
      queueService.minimizeTopics = {};
      expect(component.minimizeTopics).toBe(queueService.minimizeTopics);
    });
  });

  describe('#ngOnInit', () => {
    let receiveItemsSpy: jest.SpyInstance;
    let completeItemsSpy: jest.SpyInstance;

    beforeEach(() => {
      receiveItemsSpy = jest.spyOn(component, 'receiveItems');
      completeItemsSpy = jest.spyOn(component, 'completeItems');
    });

    afterEach(() => {
      receiveItemsSpy.mockRestore();
      completeItemsSpy.mockRestore();
    });

    it('should subscribe to queueItems$', () => {
      expect(queueService.queueItems$.subscribe).not.toHaveBeenCalled();
      component.ngOnInit();

      expect(queueService.queueItems$.subscribe).toHaveBeenCalledTimes(1);

      const cb = queueService.queueItems$.subscribe.mock.calls[0][0];
      const items = [];
      cb(items);

      expect(receiveItemsSpy).toHaveBeenCalledTimes(1);
      expect(receiveItemsSpy).toHaveBeenCalledWith(items);
    });

    it('should subscribe to nextPage$', () => {
      expect(queueService.nextPage$.subscribe).not.toHaveBeenCalled();
      component.ngOnInit();

      expect(queueService.nextPage$.subscribe).toHaveBeenCalledTimes(1);

      const cb = queueService.nextPage$.subscribe.mock.calls[0][0];
      cb();

      expect(completeItemsSpy).toHaveBeenCalledTimes(1);
      expect(completeItemsSpy).toHaveBeenCalledWith();
    });
  });

  describe('#ngOnDestroy', () => {
    it('should unsubscribe from queueItems$', () => {
      component.ngOnInit();
      expect(queueItemsSubscription.unsubscribe).not.toHaveBeenCalled();
      component.ngOnDestroy();
      expect(queueItemsSubscription.unsubscribe).toHaveBeenCalledTimes(1);
    });

    it('should unsubscribe from nextPage$', () => {
      component.ngOnInit();
      expect(nextPageSubscription.unsubscribe).not.toHaveBeenCalled();
      component.ngOnDestroy();
      expect(nextPageSubscription.unsubscribe).toHaveBeenCalledTimes(1);
    });
  });

  describe('#receiveItems', () => {
    it('should update queueItems', () => {
      component.queueItems = [];

      const received: any = [1, 2, 3, 4, 5];
      component.receiveItems(received);

      expect(component.queueItems).toEqual(received);
    });
  });

  describe('#completeItems', () => {
    it('should call queueService.completePage with the queueItems', () => {
      expect(queueService.completePage).toHaveBeenCalledTimes(0);

      const queueItems = [];
      component.queueItems = queueItems;

      component.completeItems();

      expect(queueService.completePage).toHaveBeenCalledTimes(1);
      expect(queueService.completePage).toHaveBeenCalledWith(queueItems);
    });
  });

  describe('queue item updates', () => {
    beforeEach(() => {
      component.queueItems = [
        {
          data: {
            text: 'test string',
          },
          queueItem: {
            contentId: 'test-item-1',
          } as any,
          changes: {
            generalRisk: 3,
            topics: [
              { id: 0, risk: 3 },
              { id: 1, risk: 2 },
            ],
            tags: ['COMMON', 'NEW'],
            extras: {},
          },
        },
      ];
    });

    describe('#onTopicsUpdated', () => {
      it('should update the topics on the queue item changes object', () => {
        const contentId = component.queueItems[0].queueItem.contentId;

        let newTopics = [
          { id: 0, risk: 5 },
          { id: 1, risk: 5 },
          { id: 2, risk: 3 },
        ];
        component.onTopicsUpdated(contentId, newTopics);
        expect(component.queueItems[0].changes.topics).toEqual(newTopics);
        expect(component.queueItems[0].changes.topics).not.toBe(newTopics);

        newTopics = [{ id: 0, risk: 2 }];
        component.onTopicsUpdated(contentId, newTopics);
        expect(component.queueItems[0].changes.topics).toEqual(newTopics);
        expect(component.queueItems[0].changes.topics).not.toBe(newTopics);
      });

      it('should update the generalRisk if there is a general risk topic', () => {
        const contentId = component.queueItems[0].queueItem.contentId;
        component.queueItems[0].changes.generalRisk = 3;

        let newTopics = [
          { id: 0, risk: 5 },
          { id: 1, risk: 5 },
          { id: 2, risk: 3 },
        ];
        component.onTopicsUpdated(contentId, newTopics);

        expect(component.queueItems[0].changes.generalRisk).toEqual(5);

        newTopics = [{ id: 1, risk: 2 }];
        component.onTopicsUpdated(contentId, newTopics);
        expect(component.queueItems[0].changes.generalRisk).toEqual(5);
      });
    });

    describe('#onTagsUpdated', () => {
      it('should update the tags on the queue item changes object', () => {
        const contentId = component.queueItems[0].queueItem.contentId;

        let newTags = ['TEST', 'SAMPLE'];
        component.onTagsUpdated(contentId, newTags);
        expect(component.queueItems[0].changes.tags).toEqual(newTags);
        expect(component.queueItems[0].changes.tags).not.toBe(newTags);

        newTags = ['SOMETHING'];
        component.onTagsUpdated(contentId, newTags);
        expect(component.queueItems[0].changes.tags).toEqual(newTags);
        expect(component.queueItems[0].changes.tags).not.toBe(newTags);
      });
    });

    describe('#onExtrasUpdated', () => {
      it('should update the extras on the queue item changes object', () => {
        const contentId = component.queueItems[0].queueItem.contentId;

        let newExtras: QueueItemExtras = {
          altSenses: [],
          altSpellings: [],
        };
        component.onExtrasUpdated(contentId, newExtras);
        expect(component.queueItems[0].changes.extras).toEqual(newExtras);
        expect(component.queueItems[0].changes.extras).not.toBe(newExtras);

        newExtras = {
          altSenses: ['spellittt'],
        };
        component.onExtrasUpdated(contentId, newExtras);
        expect(component.queueItems[0].changes.extras).toEqual(newExtras);
        expect(component.queueItems[0].changes.extras).not.toBe(newExtras);
      });
    });
  });
});
