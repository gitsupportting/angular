import { QueueItem, QueueItemExtras } from '../../shared-components/interfaces';

export interface AuditQueueItem<T = any> {
  data: T;
  queueItem: QueueItem;
  changes: {
    generalRisk: number;
    topics: {
      id: number;
      risk: number;
    }[];
    tags: string[];
    extras: QueueItemExtras;
  };
}
