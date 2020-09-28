/**
 * Classify text into risk scores
 * Will take text and classify it via risk
 *
 * OpenAPI spec version: 2.0.1
 * Contact: support@twohat.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { LanguageCode } from './languageCode';

/**
 * Config options that can be sent into the classifier
 */
export interface ConfigLanguage {
    /**
     * Which languages are enabled
     */
    languages?: Array<LanguageCode>;
    /**
     * If the language detected is not the same as the language sent in and the AI confidence is > than this number in accuracy.  Use the detected language instead.  Best practice is to send in the language of the server or the language of the user's UI and then trump it if we strongly suspect it is wrong.
     */
    trumpLanguage?: number;
}