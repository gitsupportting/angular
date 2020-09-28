/**
 * Rules
 * The filter works as a series of rules so that each word can be mapped to a rule.  So \"Happy\" can become \"happy\" and \"b4d\" and become \"bad\".    With this API you can manage your rules.
 *
 * OpenAPI spec version: 2.0.2
 * Contact: support@twohat.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ClientId } from './clientId';
import { Flags } from './flags';
import { LanguageCode } from './languageCode';
import { RuleText } from './ruleText';
import { Timestamp } from './timestamp';
import { Topics } from './topics';

/**
 * A rule is how you want the filter to handle a piece of text.
 */
export interface Rule {
    text?: RuleText;
    topics?: Topics;
    language?: LanguageCode;
    clientId?: ClientId;
    /**
     * Alternate spellings will replace this word with another word EVERYTIME.  You can have more than one alt spelling and it will choose the best one based on context or the higher risk one if they are tied.
     */
    altSpellings?: Array<RuleText>;
    /**
     * Alternate senses will replace this word with another word SOMETIMES.  You can have more than one alt sense and it will choose the best one based on context or the higher risk one if they are tied. Typically alternate senses are tied to smart rules like {{first_name}}
     */
    altSenses?: Array<RuleText>;
    /**
     * in many cases letters like ߎ or ⌰ could be used instead of u  You can map those other letters to u and the system will see if it results in a known word when doing so.
     */
    leetMapping?: Array<string>;
    flags?: Flags;
    /**
     * List of JIRA or other Tickets associates with work on this item so you can quickly look up all things impacted by a task you were working on
     */
    taskIds?: Array<string>;
    dateCreated?: Timestamp;
    dateUpdated?: Timestamp;
}