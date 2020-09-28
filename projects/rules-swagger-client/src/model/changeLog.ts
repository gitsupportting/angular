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
import { ClientId } from './clientId';
import { LanguageCode } from './languageCode';
import { ModeratorId } from './moderatorId';
import { Rule } from './rule';
import { RuleText } from './ruleText';
import { Timestamp } from './timestamp';

/**
 * A record of when a rule was changed 
 */
export interface ChangeLog { 
    text: RuleText;
    language: LanguageCode;
    clientId: ClientId;
    /**
     * If a script was used to update this rule give the name of the script here
     */
    scriptName?: string;
    moderatorId?: ModeratorId;
    changeDate: Timestamp;
    /**
     * helpful description of the reason
     */
    description?: string;
    changed?: Array<ChangeLog.ChangedEnum>;
    oldVersion?: Rule;
    newVersion: Rule;
}
export namespace ChangeLog {
    export type ChangedEnum = 'topics' | 'altSpellings' | 'altSenses' | 'leetMappings' | 'flags' | 'tasks' | 'DELETED';
    export const ChangedEnum = {
        Topics: 'topics' as ChangedEnum,
        AltSpellings: 'altSpellings' as ChangedEnum,
        AltSenses: 'altSenses' as ChangedEnum,
        LeetMappings: 'leetMappings' as ChangedEnum,
        Flags: 'flags' as ChangedEnum,
        Tasks: 'tasks' as ChangedEnum,
        DELETED: 'DELETED' as ChangedEnum
    };
}