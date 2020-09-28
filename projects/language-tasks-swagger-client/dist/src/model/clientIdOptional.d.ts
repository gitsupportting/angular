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
 * (Optional) The unique if for the client you want to update.  If empty it will set it to the client in your API key however if you are on Enterprise or Enterprise Site Licence you can have a sandbox or subClients.  A sandbox is an  environment where you can test the rules and you can use this to push data to your sandbox.  A subclient is another install of CommunitySift that allows you to have different rules, triggers, policies, queues but inherit the defaults from your  parent organization.  This allows you to have consistently.  So in the subclient case you can push items to queues to any of the clientIds you control
 */
export declare type ClientIdOptional = number;
