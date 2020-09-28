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

export type Flag2 = 'COMMON' | 'WATCH' | 'SKIP' | 'PHRASE_RULE' | 'USERNAME' | 'FIRST_NAME' | 'LAST_NAME' | 'CITY' | 'STATE' | 'COUNTRY' | 'EMAIL_ADDRESS';

export const Flag2 = {
    COMMON: 'COMMON' as Flag2,
    WATCH: 'WATCH' as Flag2,
    SKIP: 'SKIP' as Flag2,
    PHRASERULE: 'PHRASE_RULE' as Flag2,
    USERNAME: 'USERNAME' as Flag2,
    FIRSTNAME: 'FIRST_NAME' as Flag2,
    LASTNAME: 'LAST_NAME' as Flag2,
    CITY: 'CITY' as Flag2,
    STATE: 'STATE' as Flag2,
    COUNTRY: 'COUNTRY' as Flag2,
    EMAILADDRESS: 'EMAIL_ADDRESS' as Flag2
};