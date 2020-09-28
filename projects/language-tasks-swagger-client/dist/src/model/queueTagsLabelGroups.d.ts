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
import { QueueTagsOptions } from './queueTagsOptions';
export interface QueueTagsLabelGroups {
    /**
     * This label group is only required if the specified tag is on the queue item
     */
    ifTag?: string;
    /**
     * If true, then multiple options are allowed, otherwise, only one of the options is allowed
     */
    multiple?: boolean;
    options: Array<QueueTagsOptions>;
}
