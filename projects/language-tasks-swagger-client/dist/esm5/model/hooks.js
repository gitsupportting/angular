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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9sYW5ndWFnZS10YXNrcy1zd2FnZ2VyLWNsaWVudC8iLCJzb3VyY2VzIjpbIm1vZGVsL2hvb2tzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0dBVUciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogSW5ib3ggQVBJXHJcbiAqIE1hbmFnZSB3b3JrIGZvciBodW1hbiBtb2RlcmF0b3JzIGJ5IGFkZGluZywgY2hlY2tpbmcgb3V0IGFuZCBjb21wbGV0aW5nIHdvcmsgaXRlbXMuIFN0b3JlIFVzZXIgR2VuZXJhdGVkIENvbnRlbnQgdG8gdGhlIGRhdGFiYXNlLiAgVGhpcyB3aWxsIHN0b3JlIGl0IHR3aWNlLCBvbmNlIGluIHNob3J0LXRlcm0gc3RvcmFnZSBpbiBpdCdzIGV4YWN0IGZvcm0gYW1kIGFnYWluIGluIGxvbmcgdGVybSBzdG9yYWdlIGluIGl0J3MgcmVkYWN0ZWQgYW5kIHBzZXVkb255bWl6ZWQgZm9ybSBcclxuICpcclxuICogT3BlbkFQSSBzcGVjIHZlcnNpb246IDIuMS4xXHJcbiAqIENvbnRhY3Q6IHN1cHBvcnRAdHdvaGF0LmNvbVxyXG4gKlxyXG4gKiBOT1RFOiBUaGlzIGNsYXNzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IHRoZSBzd2FnZ2VyIGNvZGUgZ2VuZXJhdG9yIHByb2dyYW0uXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2FnZ2VyLWFwaS9zd2FnZ2VyLWNvZGVnZW4uZ2l0XHJcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cclxuICovXHJcblxyXG4vKipcclxuICogSW4gc29tZSBjYXNlcyB5b3Ugd2lsbCB3YW50IHRvIGNhbGwgdGhlIGZpbHRlciBvciBhbiBBSSBwaWVjZSBhaGVhZCBvZiBzYXZpbmcgdGhlIHF1ZXVlLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBIb29rcyB7IFxyXG4gICAgLyoqXHJcbiAgICAgKiBXaWxsIGxvb2sgdXAgYSB1c2VyLiAgV2lsbCBjaGVjayBmb3IgdGhlIHVzZXJJZCBpbiB1c2VyLnVzZXJJZCB0aGVuIHVzZXJJZCBpZiBpdCBkb2VzIG5vdCBleGlzdC4gIEl0IHdpbGwgcG9wdWxhdGUgdGhlIG9iamVjdCB1c2VyXHJcbiAgICAgKi9cclxuICAgIGxvb2t1cFVzZXI/OiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBXaWxsIGxvb2sgdXAgYSB1c2VyLiAgV2lsbCBjaGVjayBmb3IgdGhlIHVzZXJJZCBpbiByZXBvcnRpbmdVc2VyLnVzZXJJZCB0aGVuIHVzZXJJZCBpZiBpdCBkb2VzIG5vdCBleGlzdC4gIEl0IHdpbGwgcG9wdWxhdGUgdGhlIG9iamVjdCByZXBvcnRpbmdVc2VyLiAgVGhpcyBpcyB0aGUgdXNlciB3aG8gcmVwb3J0ZWQgYW5vdGhlciB1c2VyLlxyXG4gICAgICovXHJcbiAgICBsb29rdXBSZXBvcnRpbmdVc2VyPzogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogV2lsbCBsb29rIHVwIHRoZSBjb250ZXh0IChleC4gc2VydmVyIGFuZCByb29tIE9SIGNoYW5uZWwgT1IgcG9zdElkKS4gIFdpbGwgY2hlY2sgZm9yIHRoZSBjb250ZXh0IGluIGNvbnRleHQubmFtZSB0aGVuIGNvbnRleHQgaWYgaXQgZG9lcyBub3QgZXhpc3QuICBJdCB3aWxsIHBvcHVsYXRlIHRoZSBvYmplY3QgY29udGV4dFxyXG4gICAgICovXHJcbiAgICBsb29rdXBDb250ZXh0PzogYm9vbGVhbjtcclxuICAgIC8qKlxyXG4gICAgICogSG93IG1hbnkgbGluZXMgb2YgY29udGV4dCBzaG91bGQgd2UgbG9hZCBmcm9tIHRoZSBjb250ZW50IGxvZ3MuICBEZWZhdWx0IGlzIDAgd2hpY2ggc2tpcHMgdGhpcyBzdGVwLiAgSXQgd2lsbCBsb29rIHVwIHRoZSB1c2VyIGJhc2VkIG9uIHRoZSBjb250ZXh0Lm5hbWUgKyB0aGUgdXNlci51c2VySWQgKyB0aW1lc3RhbXAgZmllbGRzICsgdGV4dC50ZXh0LiAgSWYgYW55IG9mIHRob3NlIGZpZWxkcyBpcyBtaXNzaW5nIGl0IHdpbGwgc2VhcmNoIHdpdGhvdXQgaXQgYW5kIHVzZSB0aGUgbGFzdCB4ICh0aGlzIG51bWJlcikgbGluZXMuICBJdCB3aWxsIHBvcHVsYXRlIHRoZSBhcnJheSBjb250ZXh0IHdpdGggYWxsIHRoZSBjb250ZW50IGxvZyByZXN1bHRzXHJcbiAgICAgKi9cclxuICAgIGxvb2t1cENvbnRlbnQ/OiBudW1iZXI7XHJcbiAgICAvKipcclxuICAgICAqIFdpbGwgbG9vayB1cCB0aGUgbGFuZ3VhZ2UuICBXaWxsIGNoZWNrIGZvciB0ZXh0IGluIHRleHQudGV4dCBhbmQgaWYgbm90IHByZXNlbnQgdXNlIHRleHQuICBXaWxsIHNldCBxdWV1ZUl0ZW0ubGFuZ3VhZ2UubGFuZ3VhZ2UgYW5kIHF1ZXVlSXRlbS5sYW5ndWFnZS5kZXRlY3RlZCBvdmVycmlkaW5nIGFueSBjdXJyZW50IGxhbmd1YWdlIGhhcmQtY29kZWQuXHJcbiAgICAgKi9cclxuICAgIGxhbmd1YWdlSWQ/OiBib29sZWFuO1xyXG4gICAgLyoqXHJcbiAgICAgKiBMaXN0IGFsbCB0aGUgQUkgbW9kZWxzIHlvdSB3YW50IHRvIGNhbGwgaGVyZS4gIFlvdSBjYW4gdHJ1bXAgYSBtb2RlbCB3aXRoIGEgY2xpZW50IHNwZWNpZmljIG1vZGVsIGJ5IHNldHRpbmcgcXVldWUucGFyYW0gd2hlcmUgbmFtZSA9PSAndGhpc01vZGVsTmFtZScgc28gaW5kaXZpZHVhbCBjbGllbnRzIGNhbiBvdmVycmlkZSBpdCB3aXRoIGN1c3RvbSBtb2RlbHMgdHJhaW5lZCBhcyBhIHByb2Zlc3Npb25hbCBzZXJ2aWNlLiBUaGlzIGlzIGNhbGxlZCBsYXN0IGFmdGVyIHRoZSBvdGhlciBmaWVsZHMgaGF2ZSBiZWVuIGxvYWRlZCBhcyBpdCB3aWxsIHVzZSB0aGVtIHRvIG1ha2UgcHJlZGljdGlvbnMuICBJdCB3aWxsIHNldCB0aGUgcXVldWVJdGVtLnByZWRpY3Rpb25zIGFycmF5IHRvIHRoZSByZXN1bHRzLiAgVGhlIGZvbGxvd2luZyBmb3JtYXRzIHdpbGwgYmUgdXNlZCAgLSBtb2RlbE5hbWUgKGNhbiB0aGlzIG1vZGVsIGZvciBhbGwgbGFuZ3VhZ2VzKSAgLSBtb2RlbE5hbWVfe2xhbmd1YWdlfSAod2lsbCByZXBsYWNlIHtsYW5ndWFnZX0gd2l0aCB0aGUgdmFsdWUgaW4gcXVldWVJdGVtLmxhbmd1YWdlLmxhbmd1YWdlKSBcclxuICAgICAqL1xyXG4gICAgcXVldWVBST86IEFycmF5PHN0cmluZz47XHJcbn0iXX0=