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
import { ClientId } from './clientId';
import { ModeratorId } from './moderatorId';
import { Resolved } from './resolved';

/**
 * Moderators can leave comments and questions about an item.  This is a way to communicate with the SiftTeam about an item
 */
export interface Comment { 
    /**
     * the unique identifier for this comment
     */
    commentId?: string;
    /**
     * Unixtimestamp (milliseconds since Epoch) of when this comment was added
     */
    dateCreated?: number;
    /**
     * The message itself
     */
    text?: string;
    resolved?: Resolved;
    moderatorId?: ModeratorId;
    clientId?: ClientId;
    clientIdTo?: ClientId;
    /**
     * The id for this queue item
     */
    contentId?: string;
}