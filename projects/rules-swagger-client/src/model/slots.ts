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
import { Rule2 } from './rule2';

/**
 * The system breaks each word into it's own slot (note that some words are broken up and made into two slots like heythere can become hey and there)
 */
export interface Slots { 
    /**
     * This is the original text before we normalized it or fixed any spelling.  So \"PASS\" instead of \"pass\"
     */
    original?: string;
    /**
     * This is the normalized text of just this word. Typically it is lowercase.  In the case where it uses a smart rule it could be that smart rule like \"{{first_name}}\"
     */
    text?: string;
    /**
     * This is the rule that was used to solve this slot.  It may cover more than one slot when there is context like \"you are\" coveres both you and are.
     */
    solution?: string;
    /**
     * These are all the rules considered for this slot   The system considers many rules when it tries to find out what this word is in context.  A token is a rule that it considered.  Longer tokens by word count beat smaller tokens so \"made out\" is less important than \"made out of\".  Likewise when tokens are tied the tie is broken by the higher risk item.  Some expections apply when there are too many steps to fix the spelling or words are blacklisted etc. 
     */
    tokens?: Array<Rule2>;
    /**
     * This is the start position with an offset of 0 for the original phrase. The end position is startPos + len(original). Negative numbers mean they are part of the \"pre\" or the sentence before brought back into context.
     */
    startPos?: number;
}