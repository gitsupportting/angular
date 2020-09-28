import { BaseQueueService } from './base-queue.service';
import { OnInit, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { AuditQueueItem } from './interfaces/audit-queue-item.interface';
import { ITopic, QueueItemExtras } from '../shared-components/interfaces';

export abstract class BaseQueueComponent<T> implements OnInit, OnDestroy {
  private queueItemsSubscription: Subscription;
  private nextPageSubscription: Subscription;

  commitTopicDefaults = new Subject<void>();
  queueItems: AuditQueueItem<T>[];

  constructor(protected readonly queueService: BaseQueueService) {}

  get isReviewing() {
    return this.queueService.isReviewing;
  }

  get isLoading() {
    return this.queueService.isLoading;
  }

  get tagInfo() {
    return this.queueService.queueInfo?.tags;
  }

  get minimizeTopics() {
    return this.queueService.minimizeTopics;
  }

  ngOnInit() {
    this.queueItemsSubscription = this.queueService.queueItems$.subscribe(
      (items) => this.receiveItems(items)
    );

    this.nextPageSubscription = this.queueService.nextPage$.subscribe(() =>
      this.completeItems()
    );
  }

  ngOnDestroy() {
    this.queueItemsSubscription.unsubscribe();
    this.nextPageSubscription.unsubscribe();
  }

  receiveItems(items: AuditQueueItem<T>[]) {
    this.queueItems = items;
  }

  completeItems() {
    this.queueService.completePage(this.queueItems);
  }

  /**
   * Update the topics on a Queue Item
   * @param contentId - Contend ID of the item to update
   * @param topics - Array of topics to set on the queue item
   */
  onTopicsUpdated(contentId: string, topics: ITopic[]): void {
    const auditQueueItem = this.queueItems.find(
      ({ queueItem }) => queueItem.contentId === contentId
    );
    const newTopics = topics.slice();

    const generalTopic = newTopics.find(({ id }) => id === 0);
    if (generalTopic) {
      auditQueueItem.changes.generalRisk = generalTopic.risk;
    }

    auditQueueItem.changes.topics = newTopics;
  }

  /**
   * Update the tags on a Queue Item
   * @param contentId - Contend ID of the item to update
   * @param tags - Array of tags to set on the queue item
   */
  onTagsUpdated(contentId: string, tags: string[]): void {
    const auditQueueItem = this.queueItems.find(
      ({ queueItem }) => queueItem.contentId === contentId
    );
    auditQueueItem.changes.tags = tags.slice();
  }

  onExtrasUpdated(contentId: string, extras: QueueItemExtras) {
    const auditQueueItem = this.queueItems.find(
      ({ queueItem }) => queueItem.contentId === contentId
    );
    auditQueueItem.changes.extras = { ...extras };
  }
}
