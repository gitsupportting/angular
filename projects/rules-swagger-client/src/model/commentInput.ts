/**
 * Rules
 * The filter works as a series of rules so that each word can be mapped to a rule.  So \"Happy\" can become \"happy\" and \"b4d\" and become \"bad\".    With this API you can manage your rules. 
 *
 * OpenAPI spec version: 2.0.3
 * Contact: support@twohat.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ClientId2 } from './clientId2';
import { ModeratorId } from './moderatorId';
import { Resolved } from './resolved';

/**
 * Moderators can leave comments and questions about an item.  This is a way to communicate with the SiftTeam about an item
 */
export interface CommentInput {
    /**
     * The message itself
     */
    text?: string;
    resolved?: Resolved;
    moderatorId?: ModeratorId;
    clientId?: ClientId2;
    clientIdTo?: ClientId2;
}