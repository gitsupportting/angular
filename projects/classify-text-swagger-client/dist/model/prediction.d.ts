/**
 * Shared Components
 * Used to share components between specification docs
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@twohat.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/**
 * An AI prediction
 */
export interface Prediction {
    /**
     * The name of the model that made this prediction.
     */
    name?: string;
    /**
     * The prediction made.  A floating point number between 0.00 and 1.00
     */
    prediction?: number;
}
