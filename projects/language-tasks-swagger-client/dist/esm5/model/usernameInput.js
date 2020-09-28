export var UsernameInput;
(function (UsernameInput) {
    UsernameInput.TypeEnum = {
        FIXTHIS: 'FIX_THIS',
        COMMON: 'COMMON',
        SAMPLE: 'SAMPLE',
        SAMPLEONX: 'SAMPLE_ON_X'
    };
})(UsernameInput || (UsernameInput = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcm5hbWVJbnB1dC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xhbmd1YWdlLXRhc2tzLXN3YWdnZXItY2xpZW50LyIsInNvdXJjZXMiOlsibW9kZWwvdXNlcm5hbWVJbnB1dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQ0EsTUFBTSxLQUFXLGFBQWEsQ0FRN0I7QUFSRCxXQUFpQixhQUFhO0lBRWIsc0JBQVEsR0FBRztRQUNwQixPQUFPLEVBQUUsVUFBc0I7UUFDL0IsTUFBTSxFQUFFLFFBQW9CO1FBQzVCLE1BQU0sRUFBRSxRQUFvQjtRQUM1QixTQUFTLEVBQUUsYUFBeUI7S0FDdkMsQ0FBQztBQUNOLENBQUMsRUFSZ0IsYUFBYSxLQUFiLGFBQWEsUUFRN0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogSW5ib3ggQVBJXHJcbiAqIE1hbmFnZSB3b3JrIGZvciBodW1hbiBtb2RlcmF0b3JzIGJ5IGFkZGluZywgY2hlY2tpbmcgb3V0IGFuZCBjb21wbGV0aW5nIHdvcmsgaXRlbXMuIFN0b3JlIFVzZXIgR2VuZXJhdGVkIENvbnRlbnQgdG8gdGhlIGRhdGFiYXNlLiAgVGhpcyB3aWxsIHN0b3JlIGl0IHR3aWNlLCBvbmNlIGluIHNob3J0LXRlcm0gc3RvcmFnZSBpbiBpdCdzIGV4YWN0IGZvcm0gYW1kIGFnYWluIGluIGxvbmcgdGVybSBzdG9yYWdlIGluIGl0J3MgcmVkYWN0ZWQgYW5kIHBzZXVkb255bWl6ZWQgZm9ybSBcclxuICpcclxuICogT3BlbkFQSSBzcGVjIHZlcnNpb246IDIuMS4xXHJcbiAqIENvbnRhY3Q6IHN1cHBvcnRAdHdvaGF0LmNvbVxyXG4gKlxyXG4gKiBOT1RFOiBUaGlzIGNsYXNzIGlzIGF1dG8gZ2VuZXJhdGVkIGJ5IHRoZSBzd2FnZ2VyIGNvZGUgZ2VuZXJhdG9yIHByb2dyYW0uXHJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zd2FnZ2VyLWFwaS9zd2FnZ2VyLWNvZGVnZW4uZ2l0XHJcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cclxuICovXHJcbmltcG9ydCB7IENsaWVudElkT3B0aW9uYWwgfSBmcm9tICcuL2NsaWVudElkT3B0aW9uYWwnO1xyXG5pbXBvcnQgeyBEZWNpc2lvbiB9IGZyb20gJy4vZGVjaXNpb24nO1xyXG5pbXBvcnQgeyBMYW5ndWFnZUNvZGUgfSBmcm9tICcuL2xhbmd1YWdlQ29kZSc7XHJcbmltcG9ydCB7IFByaW9yaXR5IH0gZnJvbSAnLi9wcmlvcml0eSc7XHJcbmltcG9ydCB7IFJldmlld3NOZWVkZWQgfSBmcm9tICcuL3Jldmlld3NOZWVkZWQnO1xyXG5pbXBvcnQgeyBVc2VybmFtZURhdGEgfSBmcm9tICcuL3VzZXJuYW1lRGF0YSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJuYW1lSW5wdXQgeyBcclxuICAgIGxhbmd1YWdlOiBMYW5ndWFnZUNvZGU7XHJcbiAgICBjbGllbnRJZD86IENsaWVudElkT3B0aW9uYWw7XHJcbiAgICBwcmlvcml0eT86IFByaW9yaXR5O1xyXG4gICAgLyoqXHJcbiAgICAgKiBVbml4dGltZXN0YW1wIChtaWxsaXNlY29uZHMgc2luY2UgRXBvY2gpIG9mIHdoZW4gdGhlIGl0ZW0gd2FzIG9yaWdpbmFsbHkgc2FpZC4gIFRoaXMgaXMgaW1wb3J0YW50IGZvciBkYXRhIHJldGVudGlvbiB3aGVuIHlvdSBpbXBvcnQgb2xkZXIgZGF0YS5cclxuICAgICAqL1xyXG4gICAgb3JpZ2luYWxEYXRlPzogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBGZWF0dXJlcyB0byB1c2UgdG8gdHJhaW4gQUksIGZvciBpbnRlcm5hbCBzaWZ0IHVzZVxyXG4gICAgICovXHJcbiAgICBmZWF0dXJlcz86IHsgW2tleTogc3RyaW5nXTogYW55OyB9O1xyXG4gICAgLyoqXHJcbiAgICAgKiBXaGF0IHRhZ3MgYXJlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGl0ZW0gIFRvIGFkZCBvciByZW1vdmUgYSB0YWcgdXNlIHRoZSBQT1NUIC4uLi9yZXZpZXcgQVBJIGVuZHBvaW50IFxyXG4gICAgICovXHJcbiAgICB0YWdzPzogQXJyYXk8c3RyaW5nPjtcclxuICAgIC8qKlxyXG4gICAgICogV2hhdCBraW5kIG9mIGV4YW1wbGUgaXMgdGhpcyAgLSBGSVhfVEhJUyB8IFdlIHJlY29tbWVuZCB0aGF0IHdoZW4geW91IGZpbHRlciBhbiBpdGVtIHlvdSBzaG93IG9uIHRoZSBzY3JlZW4gb2YgdGhlIHVzZXIgd2hvIHRyaWVkIHRvIGVudGVyIGl0IHRoYXQgaXQgd2FzIGZpbHRlcmVkLiAgVGhleSBjYW4gcHJlc3MgYSBidXR0b24gb24geW91ciBhcHAgdG8gc3VibWl0IGl0IGFzIGEgZmFsc2UgcG9zaXRpdmUuICBMaWtld2lzZSB1c2VycyB0aGF0IHNlZSBjaGF0IGNhbiByZXBvcnQgdGhlbSBhcyBmYWxzZSBuZWdhdGl2ZXMuICBCb3RoIGFyZSBmaXggdGhpcy4gIFdlIGFuYWx5emUgd2hhdCB3b3JkcyBhbmQgcnVsZXMgYXJlIHVzZWQgYW5kIG9uIHRoZSB4dGggdGltZSBpdCBpcyB1c2VkICh0eXBpY2FsbHkgMTAsIDI1LCA1MCwgMTAwLCBldGMpIHdlIGZhbGcgaXQgZm9yIHlvdSB0byByZXZpZXcuIC0gQ09NTU9OIHwgV2UgcnVuIGEgc2NyaXB0IGV2ZXJ5IG5pZ2h0IGFuZCBjb3VudCB3aGljaCBhcmUgeWVzdGVyZGF5cyBtb3N0IGNvbW1vbiBleGFtcGxlcy4gLSBTQU1QTEUgfCBXRSBydW4gYSBzY3JpcHQgZXZlcnkgbmlnaHQgYW5kIHNhbXBsZSB0aGUgZGF0YSBwZXIgdG9waWMgcGVyIHJpc2sgbGV2ZWwgdG8gY3JlYXRlIGEgUUEgcXVldWUgLSBTQU1QTEVfT05fWCB8IFdlIHJ1biBhIHNjcmlwdCBldmVyeSBuaWdodCBhbmQgc2FtcGxlIHVzZXJuYW1lcyB3aGVuIHRoZSB1c2VyIGhhcyBzYWlkIHRoZWlyIHh0aCBpdGVtLiAgSWYgeW91IHNldCB0aGlzIG51bWJlciBoaWdoIHlvdSBjYW4gICAgIGF1ZGl0IGxvbmctc3RhbmRpbmcgbWVtYmVycyB3aXRoIHRoZSBhc3N1bXB0aW9uIHRoYXQgYWxsIHRoZSBuYW1lcyBhcmUgY2xlYW4gYXMgdGhleSB3b3VsZCBoYXZlIGJlZW4gcmVwb3J0ZWQgYnkgbm93LiAgWW91IGNhbiBhbHNvIHVzZSB0aGlzICAgIHdoZW4geW91IGRvbid0IGNhbGwgb3VyIHVzZXJuYW1lIGZlYXR1cmUgYW5kIGp1c3Qgd2FudCB0byBzYW1wbGUgc29tZSBuYW1lcy4gXHJcbiAgICAgKi9cclxuICAgIHR5cGU6IFVzZXJuYW1lSW5wdXQuVHlwZUVudW07XHJcbiAgICByZXZpZXdzTmVlZGVkPzogUmV2aWV3c05lZWRlZDtcclxuICAgIGRhdGE6IFVzZXJuYW1lRGF0YTtcclxuICAgIGRlY2lzaW9uPzogRGVjaXNpb247XHJcbn1cclxuZXhwb3J0IG5hbWVzcGFjZSBVc2VybmFtZUlucHV0IHtcclxuICAgIGV4cG9ydCB0eXBlIFR5cGVFbnVtID0gJ0ZJWF9USElTJyB8ICdDT01NT04nIHwgJ1NBTVBMRScgfCAnU0FNUExFX09OX1gnO1xyXG4gICAgZXhwb3J0IGNvbnN0IFR5cGVFbnVtID0ge1xyXG4gICAgICAgIEZJWFRISVM6ICdGSVhfVEhJUycgYXMgVHlwZUVudW0sXHJcbiAgICAgICAgQ09NTU9OOiAnQ09NTU9OJyBhcyBUeXBlRW51bSxcclxuICAgICAgICBTQU1QTEU6ICdTQU1QTEUnIGFzIFR5cGVFbnVtLFxyXG4gICAgICAgIFNBTVBMRU9OWDogJ1NBTVBMRV9PTl9YJyBhcyBUeXBlRW51bVxyXG4gICAgfTtcclxufSJdfQ==