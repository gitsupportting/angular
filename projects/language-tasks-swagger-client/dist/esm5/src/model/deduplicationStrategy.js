/**
 * Inbox API
 * Manage work for human moderators by adding, checking out and completing work items. Store User Generated Content to the database.  This will store it twice, once in short-term storage in it's exact form amd again in long term storage in it's redacted and pseudonymized form
 *
 * OpenAPI spec version: 2.1.1
 * Contact: support@twohat.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVkdXBsaWNhdGlvblN0cmF0ZWd5LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGFuZ3VhZ2UtdGFza3Mtc3dhZ2dlci1jbGllbnQvc3JjLyIsInNvdXJjZXMiOlsibW9kZWwvZGVkdXBsaWNhdGlvblN0cmF0ZWd5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0dBVUciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogSW5ib3ggQVBJXHJcbiAqIE1hbmFnZSB3b3JrIGZvciBodW1hbiBtb2RlcmF0b3JzIGJ5IGFkZGluZywgY2hlY2tpbmcgb3V0IGFuZCBjb21wbGV0aW5nIHdvcmsgaXRlbXMuIFN0b3JlIFVzZXIgR2VuZXJhdGVkIENvbnRlbnQgdG8gdGhlIGRhdGFiYXNlLiAgVGhpcyB3aWxsIHN0b3JlIGl0IHR3aWNlLCBvbmNlIGluIHNob3J0LXRlcm0gc3RvcmFnZSBpbiBpdCdzIGV4YWN0IGZvcm0gYW1kIGFnYWluIGluIGxvbmcgdGVybSBzdG9yYWdlIGluIGl0J3MgcmVkYWN0ZWQgYW5kIHBzZXVkb255bWl6ZWQgZm9ybSBcclxuICpcclxuICogT3BlbkFQSSBzcGVjIHZlcnNpb246IDIuMS4xXHJcbiAqIENvbnRhY3Q6IHN1cHBvcnRAdHdvaGF0LmNvbVxyXG4gKlxyXG4gKiBOT1RFOiBUaGlzIGNsYXNzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IHRoZSBzd2FnZ2VyIGNvZGUgZ2VuZXJhdG9yIHByb2dyYW0uXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2FnZ2VyLWFwaS9zd2FnZ2VyLWNvZGVnZW4uZ2l0XHJcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cclxuICovXHJcblxyXG4vKipcclxuICogVGhlIGRlZmF1bHQgYmVoYXZpb3VyIGlzIHRvIGp1c3QgYWRkIHRoZSBpdGVtcyB3aGljaCBpcyBhbHNvIHRoZSBmYXN0ZXN0LiAgSWYgdGhleSBhcmUgbmV3IHRoZW4gdGhleSBhcmUgcXVldWVkLiAgSWYgdGhleSBhcmUgYWxyZWFkeSBpbiB0aGUgc3lzdGVtIGFuZCBkZWFsdCB3aXRoIGNsb3NlIHRoZW0uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIERlZHVwbGljYXRpb25TdHJhdGVneSB7IFxyXG4gICAgLyoqXHJcbiAgICAgKiBGb3IgZGUtZHVwbGljYXRpb24gbGlzdCB0aGUgZmllbGRzIGluIG9yZGVyXHJcbiAgICAgKi9cclxuICAgIGZpZWxkcz86IEFycmF5PHN0cmluZz47XHJcbiAgICAvKipcclxuICAgICAqIElmIHRoZSBpdGVtIGlzIGEgZHVwbGljYXRlIGFuZCBpdCBpcyBhbHJlYWR5IGNsb3NlZCB0aGVuIG9ubHkgcmVvcGVuIGl0IGFmdGVyIHNvIG1hbnkgc2Vjb25kcyBzaW5jZSBpdCB3YXMgY2xvc2VkLiAgVGhlIGRlZmF1bHQgaXMgMCB3aGljaCBtZWFucyBkbyBub3QgcmVvcGVuLiAgRm9yIHJlcG9ydGVkIGNvbnRlbnQgd2UgcmVjb21tZW5kIDI0IGhvdXJzIHdoaWNoIGlzIDg2NDAwIHNlY29uZHMuXHJcbiAgICAgKi9cclxuICAgIHJlb3BlbkFmdGVyWFNlY29uZHM/OiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIElmIGFuIGl0ZW0gaXMgcmVwZWF0ZWQgc2hvdWxkIGl0IGluY3JlYXNlIGluIHByaW9yaXR5PyAgVGhpcyB3b3VsZCBtYWtlIGl0IG5vIGxvbmdlciBhIEZJRk8gKEZpcnN0IGluIGZpcnN0IG91dCkgb3V0IGxpa2UgcXVldWUgd2hlcmUgaXRlbXMgZ28gb3V0IGluIHRoZSBvcmRlciB0aGV5IHdlbnQgaW4uICBBIHByYWN0aWNhbCB1c2UgY2FzZSBpcyBmb3IgcmVwb3J0ZWQgY29udGVudCBieSB1c2VySWQuICBZb3Ugd291bGQgc2V0IHRoZSBkZWR1cGxpY2F0aW9uIG9uIHRoZSBmaWVsZCByZXBvcnRlZFVzZXJJZCBhbmQgdGhlbiB0ZWxsIGl0IHRvIGluY3JlYXNlIHRoZSBwcmlvcml0eS4gIFRoZSB1c2VycyB0aGF0IGFyZSByZXBvcnRlZCBtb3JlIG9mdGVuIHdpbGwgYmUgYXQgdGhlIGZyb250IG9mIHRoZSB3b3JrbG9hZCBhbGxvd2luZyB5b3UgdG8gZGVhbCB3aXRoIHlvdXIgbW9zdCBzZXJpb3VzIG9mZmVuZGVycyBmaXJzdC5cclxuICAgICAqL1xyXG4gICAgcHJpb3JpdGl6ZT86IGJvb2xlYW47XHJcbn0iXX0=