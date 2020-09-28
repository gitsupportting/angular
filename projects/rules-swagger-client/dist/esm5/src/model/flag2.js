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
export var Flag2 = {
    COMMON: 'COMMON',
    WATCH: 'WATCH',
    SKIP: 'SKIP',
    PHRASERULE: 'PHRASE_RULE',
    USERNAME: 'USERNAME',
    FIRSTNAME: 'FIRST_NAME',
    LASTNAME: 'LAST_NAME',
    CITY: 'CITY',
    STATE: 'STATE',
    COUNTRY: 'COUNTRY',
    EMAILADDRESS: 'EMAIL_ADDRESS'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhZzIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ydWxlcy1zd2FnZ2VyLWNsaWVudC9zcmMvIiwic291cmNlcyI6WyJtb2RlbC9mbGFnMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztHQVVHO0FBSUgsTUFBTSxDQUFDLElBQU0sS0FBSyxHQUFHO0lBQ2pCLE1BQU0sRUFBRSxRQUFpQjtJQUN6QixLQUFLLEVBQUUsT0FBZ0I7SUFDdkIsSUFBSSxFQUFFLE1BQWU7SUFDckIsVUFBVSxFQUFFLGFBQXNCO0lBQ2xDLFFBQVEsRUFBRSxVQUFtQjtJQUM3QixTQUFTLEVBQUUsWUFBcUI7SUFDaEMsUUFBUSxFQUFFLFdBQW9CO0lBQzlCLElBQUksRUFBRSxNQUFlO0lBQ3JCLEtBQUssRUFBRSxPQUFnQjtJQUN2QixPQUFPLEVBQUUsU0FBa0I7SUFDM0IsWUFBWSxFQUFFLGVBQXdCO0NBQ3pDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFJ1bGVzXG4gKiBUaGUgZmlsdGVyIHdvcmtzIGFzIGEgc2VyaWVzIG9mIHJ1bGVzIHNvIHRoYXQgZWFjaCB3b3JkIGNhbiBiZSBtYXBwZWQgdG8gYSBydWxlLiAgU28gXFxcIkhhcHB5XFxcIiBjYW4gYmVjb21lIFxcXCJoYXBweVxcXCIgYW5kIFxcXCJiNGRcXFwiIGFuZCBiZWNvbWUgXFxcImJhZFxcXCIuICAgIFdpdGggdGhpcyBBUEkgeW91IGNhbiBtYW5hZ2UgeW91ciBydWxlcy4gXG4gKlxuICogT3BlbkFQSSBzcGVjIHZlcnNpb246IDIuMC4zXG4gKiBDb250YWN0OiBzdXBwb3J0QHR3b2hhdC5jb21cbiAqXG4gKiBOT1RFOiBUaGlzIGNsYXNzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IHRoZSBzd2FnZ2VyIGNvZGUgZ2VuZXJhdG9yIHByb2dyYW0uXG4gKiBodHRwczovL2dpdGh1Yi5jb20vc3dhZ2dlci1hcGkvc3dhZ2dlci1jb2RlZ2VuLmdpdFxuICogRG8gbm90IGVkaXQgdGhlIGNsYXNzIG1hbnVhbGx5LlxuICovXG5cbmV4cG9ydCB0eXBlIEZsYWcyID0gJ0NPTU1PTicgfCAnV0FUQ0gnIHwgJ1NLSVAnIHwgJ1BIUkFTRV9SVUxFJyB8ICdVU0VSTkFNRScgfCAnRklSU1RfTkFNRScgfCAnTEFTVF9OQU1FJyB8ICdDSVRZJyB8ICdTVEFURScgfCAnQ09VTlRSWScgfCAnRU1BSUxfQUREUkVTUyc7XG5cbmV4cG9ydCBjb25zdCBGbGFnMiA9IHtcbiAgICBDT01NT046ICdDT01NT04nIGFzIEZsYWcyLFxuICAgIFdBVENIOiAnV0FUQ0gnIGFzIEZsYWcyLFxuICAgIFNLSVA6ICdTS0lQJyBhcyBGbGFnMixcbiAgICBQSFJBU0VSVUxFOiAnUEhSQVNFX1JVTEUnIGFzIEZsYWcyLFxuICAgIFVTRVJOQU1FOiAnVVNFUk5BTUUnIGFzIEZsYWcyLFxuICAgIEZJUlNUTkFNRTogJ0ZJUlNUX05BTUUnIGFzIEZsYWcyLFxuICAgIExBU1ROQU1FOiAnTEFTVF9OQU1FJyBhcyBGbGFnMixcbiAgICBDSVRZOiAnQ0lUWScgYXMgRmxhZzIsXG4gICAgU1RBVEU6ICdTVEFURScgYXMgRmxhZzIsXG4gICAgQ09VTlRSWTogJ0NPVU5UUlknIGFzIEZsYWcyLFxuICAgIEVNQUlMQUREUkVTUzogJ0VNQUlMX0FERFJFU1MnIGFzIEZsYWcyXG59OyJdfQ==