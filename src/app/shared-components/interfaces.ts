import { CreateQueueItemDecision } from '../base-queue/interfaces/create-queue-item-decision.interface';

/**
 * Condensed set of topic/risk pairs
 * @example { 0: 1, 2: 3 }
 */
export interface TopicSet {
  [topicId: string]: number;
}

export interface Language {
  language: string;
  detected?: object;
}

export interface QueueItemCheckout {
  expires: number;
  moderatorId: string;
}

export interface QueueItemBase {
  checkout?: QueueItemCheckout;
  clientId: number;
  comments: any[];
  contentId: string;
  dateCreated: number;
  decisions: CreateQueueItemDecision[];
  extras?: QueueItemExtras;
  language: Language;
  prediction?: object[];
  priority: number;
  pseudonymizedDate?: number;
  redacted: any;
  reviewsNeeded: number;
  simplified: string;
  tags?: string[];
}

export interface QueueItemFromAPI extends QueueItemBase {
  topics: TopicSet;
}

export interface QueueItem extends QueueItemBase {
  topics: ITopic[];
}

export interface ITopic {
  id: number;
  risk: number;
}

export interface QueueItemExtras {
  altSenses?: string[];
  altSpellings?: string[];
}

export interface DetailedTag {
  tag: string;
  value: any;
}

export interface Rule {
  altSenses: string[];
  altSpellings: string[];
  clientId: number;
  enabled: boolean;
  flags: string[];
  language: string;
  text: string;
  topics: TopicSet;
}
