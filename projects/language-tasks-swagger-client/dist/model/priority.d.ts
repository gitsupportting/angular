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
/**
 * How important is this item to get to, can be used for sorting the queues so it breaks out of First in First out (FIFO).  Defaults to 0 to give FIFO
 */
export declare type Priority = number;