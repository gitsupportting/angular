/**
 * Inbox API
 * Manage work for human moderators by adding, checking out and completing work items. Store User Generated Content to the database.  This will store it twice, once in short-term storage in it's exact form amd again in long term storage in it's redacted and pseudonymized form
 *
 * OpenAPI spec version: 2.1.1
 * Contact: support@twohat.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { QueueItem } from './queueItem';
import { TaskData } from './taskData';
/**
 * The queue item is broken into two main items, the data which is the payload or unique data to show on the screen to audit and the contentItems
 */
export interface TaskOutputItems {
    data?: TaskData;
    queueItem?: QueueItem;
}
