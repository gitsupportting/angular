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
export const Flag2 = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhZzIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ydWxlcy1zd2FnZ2VyLWNsaWVudC8iLCJzb3VyY2VzIjpbIm1vZGVsL2ZsYWcyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0dBVUc7QUFJSCxNQUFNLENBQUMsTUFBTSxLQUFLLEdBQUc7SUFDakIsTUFBTSxFQUFFLFFBQWlCO0lBQ3pCLEtBQUssRUFBRSxPQUFnQjtJQUN2QixJQUFJLEVBQUUsTUFBZTtJQUNyQixVQUFVLEVBQUUsYUFBc0I7SUFDbEMsUUFBUSxFQUFFLFVBQW1CO0lBQzdCLFNBQVMsRUFBRSxZQUFxQjtJQUNoQyxRQUFRLEVBQUUsV0FBb0I7SUFDOUIsSUFBSSxFQUFFLE1BQWU7SUFDckIsS0FBSyxFQUFFLE9BQWdCO0lBQ3ZCLE9BQU8sRUFBRSxTQUFrQjtJQUMzQixZQUFZLEVBQUUsZUFBd0I7Q0FDekMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUnVsZXNcbiAqIFRoZSBmaWx0ZXIgd29ya3MgYXMgYSBzZXJpZXMgb2YgcnVsZXMgc28gdGhhdCBlYWNoIHdvcmQgY2FuIGJlIG1hcHBlZCB0byBhIHJ1bGUuICBTbyBcXFwiSGFwcHlcXFwiIGNhbiBiZWNvbWUgXFxcImhhcHB5XFxcIiBhbmQgXFxcImI0ZFxcXCIgYW5kIGJlY29tZSBcXFwiYmFkXFxcIi4gICAgV2l0aCB0aGlzIEFQSSB5b3UgY2FuIG1hbmFnZSB5b3VyIHJ1bGVzLiBcbiAqXG4gKiBPcGVuQVBJIHNwZWMgdmVyc2lvbjogMi4wLjNcbiAqIENvbnRhY3Q6IHN1cHBvcnRAdHdvaGF0LmNvbVxuICpcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgdGhlIHN3YWdnZXIgY29kZSBnZW5lcmF0b3IgcHJvZ3JhbS5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2FnZ2VyLWFwaS9zd2FnZ2VyLWNvZGVnZW4uZ2l0XG4gKiBEbyBub3QgZWRpdCB0aGUgY2xhc3MgbWFudWFsbHkuXG4gKi9cblxuZXhwb3J0IHR5cGUgRmxhZzIgPSAnQ09NTU9OJyB8ICdXQVRDSCcgfCAnU0tJUCcgfCAnUEhSQVNFX1JVTEUnIHwgJ1VTRVJOQU1FJyB8ICdGSVJTVF9OQU1FJyB8ICdMQVNUX05BTUUnIHwgJ0NJVFknIHwgJ1NUQVRFJyB8ICdDT1VOVFJZJyB8ICdFTUFJTF9BRERSRVNTJztcblxuZXhwb3J0IGNvbnN0IEZsYWcyID0ge1xuICAgIENPTU1PTjogJ0NPTU1PTicgYXMgRmxhZzIsXG4gICAgV0FUQ0g6ICdXQVRDSCcgYXMgRmxhZzIsXG4gICAgU0tJUDogJ1NLSVAnIGFzIEZsYWcyLFxuICAgIFBIUkFTRVJVTEU6ICdQSFJBU0VfUlVMRScgYXMgRmxhZzIsXG4gICAgVVNFUk5BTUU6ICdVU0VSTkFNRScgYXMgRmxhZzIsXG4gICAgRklSU1ROQU1FOiAnRklSU1RfTkFNRScgYXMgRmxhZzIsXG4gICAgTEFTVE5BTUU6ICdMQVNUX05BTUUnIGFzIEZsYWcyLFxuICAgIENJVFk6ICdDSVRZJyBhcyBGbGFnMixcbiAgICBTVEFURTogJ1NUQVRFJyBhcyBGbGFnMixcbiAgICBDT1VOVFJZOiAnQ09VTlRSWScgYXMgRmxhZzIsXG4gICAgRU1BSUxBRERSRVNTOiAnRU1BSUxfQUREUkVTUycgYXMgRmxhZzJcbn07Il19