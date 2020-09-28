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
import { Flag } from './flag';
/**
 * These are a series of special attributes you can add to an item. For instance if you add FIRST_NAME flag it will automatically add an alt_sense of {{first_name}} and add other logic interally to treat it as potential PII
 */
export interface Flags extends Array<Flag> {
}