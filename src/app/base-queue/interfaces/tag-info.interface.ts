import { QueueLabelGroup } from './queue-label-group.interface';

export interface ContentTypeTagOptions {
  name: string;
  value: string;
  description?: string;
}

export interface TagInfo {
  contentType: ContentTypeTagOptions[];
  labelGroups: QueueLabelGroup[];
}
