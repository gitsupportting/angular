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
import { RedactedTextField } from './redactedTextField';
import { Topics2 } from './topics2';
/**
 * Which parts of the text failed the filter.
 */
export interface FailingFragment {
    /**
     * the text that failed
     */
    text?: string;
    /**
     * the simplified (normalized) form typically without caps.  This is typically the rule that matched.
     */
    normalized?: string;
    redactedText?: RedactedTextField;
    topics?: Topics2;
    /**
     * The number of characters in the original text that this appears with an offset of 0
     */
    startPos?: number;
    /**
     * the number of characters where it ends
     */
    endPos?: number;
}
