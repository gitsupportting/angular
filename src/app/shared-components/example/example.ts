import { QueueItem, QueueItemFromAPI } from '../interfaces';

export class Example {
  data: ExampleSearchResponseData;
  queueItem: QueueItem;

  static fromAPI(item: ExampleFromAPI): Example {
    return {
      data: item.data,
      queueItem: {
        ...item.queueItem,
        topics: Object.entries(item.queueItem.topics).map(([id, risk]) => {
          return {
            id: parseInt(id, 10),
            risk,
          };
        }),
      },
    };
  }
}

export interface ExampleFromAPI {
  data: ExampleSearchResponseData;
  queueItem: QueueItemFromAPI;
}

export interface GetExamples {
  total: number;
  items: Example[];
}

export interface ExampleSearchResponse {
  total: number;
  items: ExampleFromAPI[];
}

export interface ExampleSearchResponseData {
  text: string;
}
