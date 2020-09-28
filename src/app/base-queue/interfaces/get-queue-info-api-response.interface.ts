import { TagInfo } from './tag-info.interface';

export interface GetQueueInfoApiResponse {
  name: string;
  filters: string[];
  queueId: string;
  schema: any;
  params: [];
  tags: TagInfo;
}
