var Configuration = /** @class */ (function () {
    function Configuration(configurationParameters) {
        if (configurationParameters === void 0) { configurationParameters = {}; }
        this.apiKeys = configurationParameters.apiKeys;
        this.username = configurationParameters.username;
        this.password = configurationParameters.password;
        this.accessToken = configurationParameters.accessToken;
        this.basePath = configurationParameters.basePath;
        this.withCredentials = configurationParameters.withCredentials;
    }
    /**
     * Select the correct content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param contentTypes - the array of content types that are available for selection
     * @returns the selected content-type or <code>undefined</code> if no selection could be made.
     */
    Configuration.prototype.selectHeaderContentType = function (contentTypes) {
        var _this = this;
        if (contentTypes.length == 0) {
            return undefined;
        }
        var type = contentTypes.find(function (x) { return _this.isJsonMime(x); });
        if (type === undefined) {
            return contentTypes[0];
        }
        return type;
    };
    /**
     * Select the correct accept content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param accepts - the array of content types that are available for selection.
     * @returns the selected content-type or <code>undefined</code> if no selection could be made.
     */
    Configuration.prototype.selectHeaderAccept = function (accepts) {
        var _this = this;
        if (accepts.length == 0) {
            return undefined;
        }
        var type = accepts.find(function (x) { return _this.isJsonMime(x); });
        if (type === undefined) {
            return accepts[0];
        }
        return type;
    };
    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param mime - MIME (Multipurpose Internet Mail Extensions)
     * @return True if the given MIME is JSON, false otherwise.
     */
    Configuration.prototype.isJsonMime = function (mime) {
        var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    };
    return Configuration;
}());
export { Configuration };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3J1bGVzLXN3YWdnZXItY2xpZW50L3NyYy8iLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7SUFRSSx1QkFBWSx1QkFBcUQ7UUFBckQsd0NBQUEsRUFBQSw0QkFBcUQ7UUFDN0QsSUFBSSxDQUFDLE9BQU8sR0FBRyx1QkFBdUIsQ0FBQyxPQUFPLENBQUM7UUFDL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyx1QkFBdUIsQ0FBQyxRQUFRLENBQUM7UUFDakQsSUFBSSxDQUFDLFFBQVEsR0FBRyx1QkFBdUIsQ0FBQyxRQUFRLENBQUM7UUFDakQsSUFBSSxDQUFDLFdBQVcsR0FBRyx1QkFBdUIsQ0FBQyxXQUFXLENBQUM7UUFDdkQsSUFBSSxDQUFDLFFBQVEsR0FBRyx1QkFBdUIsQ0FBQyxRQUFRLENBQUM7UUFDakQsSUFBSSxDQUFDLGVBQWUsR0FBRyx1QkFBdUIsQ0FBQyxlQUFlLENBQUM7SUFDbkUsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLCtDQUF1QixHQUE5QixVQUFnQyxZQUFzQjtRQUF0RCxpQkFVQztRQVRHLElBQUksWUFBWSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDMUIsT0FBTyxTQUFTLENBQUM7U0FDcEI7UUFFRCxJQUFJLElBQUksR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1FBQ3RELElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUNwQixPQUFPLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMxQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSwwQ0FBa0IsR0FBekIsVUFBMEIsT0FBaUI7UUFBM0MsaUJBVUM7UUFURyxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sU0FBUyxDQUFDO1NBQ3BCO1FBRUQsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQztRQUNqRCxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDcEIsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ0ksa0NBQVUsR0FBakIsVUFBa0IsSUFBWTtRQUMxQixJQUFNLFFBQVEsR0FBVyxJQUFJLE1BQU0sQ0FBQywrREFBK0QsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxRyxPQUFPLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsS0FBSyw2QkFBNkIsQ0FBQyxDQUFDO0lBQ3pHLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFyRUQsSUFxRUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIENvbmZpZ3VyYXRpb25QYXJhbWV0ZXJzIHtcbiAgICBhcGlLZXlzPzoge1sga2V5OiBzdHJpbmcgXTogc3RyaW5nfTtcbiAgICB1c2VybmFtZT86IHN0cmluZztcbiAgICBwYXNzd29yZD86IHN0cmluZztcbiAgICBhY2Nlc3NUb2tlbj86IHN0cmluZyB8ICgoKSA9PiBzdHJpbmcpO1xuICAgIGJhc2VQYXRoPzogc3RyaW5nO1xuICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9uIHtcbiAgICBhcGlLZXlzPzoge1sga2V5OiBzdHJpbmcgXTogc3RyaW5nfTtcbiAgICB1c2VybmFtZT86IHN0cmluZztcbiAgICBwYXNzd29yZD86IHN0cmluZztcbiAgICBhY2Nlc3NUb2tlbj86IHN0cmluZyB8ICgoKSA9PiBzdHJpbmcpO1xuICAgIGJhc2VQYXRoPzogc3RyaW5nO1xuICAgIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3Rvcihjb25maWd1cmF0aW9uUGFyYW1ldGVyczogQ29uZmlndXJhdGlvblBhcmFtZXRlcnMgPSB7fSkge1xuICAgICAgICB0aGlzLmFwaUtleXMgPSBjb25maWd1cmF0aW9uUGFyYW1ldGVycy5hcGlLZXlzO1xuICAgICAgICB0aGlzLnVzZXJuYW1lID0gY29uZmlndXJhdGlvblBhcmFtZXRlcnMudXNlcm5hbWU7XG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBjb25maWd1cmF0aW9uUGFyYW1ldGVycy5wYXNzd29yZDtcbiAgICAgICAgdGhpcy5hY2Nlc3NUb2tlbiA9IGNvbmZpZ3VyYXRpb25QYXJhbWV0ZXJzLmFjY2Vzc1Rva2VuO1xuICAgICAgICB0aGlzLmJhc2VQYXRoID0gY29uZmlndXJhdGlvblBhcmFtZXRlcnMuYmFzZVBhdGg7XG4gICAgICAgIHRoaXMud2l0aENyZWRlbnRpYWxzID0gY29uZmlndXJhdGlvblBhcmFtZXRlcnMud2l0aENyZWRlbnRpYWxzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCB0aGUgY29ycmVjdCBjb250ZW50LXR5cGUgdG8gdXNlIGZvciBhIHJlcXVlc3QuXG4gICAgICogVXNlcyB7QGxpbmsgQ29uZmlndXJhdGlvbiNpc0pzb25NaW1lfSB0byBkZXRlcm1pbmUgdGhlIGNvcnJlY3QgY29udGVudC10eXBlLlxuICAgICAqIElmIG5vIGNvbnRlbnQgdHlwZSBpcyBmb3VuZCByZXR1cm4gdGhlIGZpcnN0IGZvdW5kIHR5cGUgaWYgdGhlIGNvbnRlbnRUeXBlcyBpcyBub3QgZW1wdHlcbiAgICAgKiBAcGFyYW0gY29udGVudFR5cGVzIC0gdGhlIGFycmF5IG9mIGNvbnRlbnQgdHlwZXMgdGhhdCBhcmUgYXZhaWxhYmxlIGZvciBzZWxlY3Rpb25cbiAgICAgKiBAcmV0dXJucyB0aGUgc2VsZWN0ZWQgY29udGVudC10eXBlIG9yIDxjb2RlPnVuZGVmaW5lZDwvY29kZT4gaWYgbm8gc2VsZWN0aW9uIGNvdWxkIGJlIG1hZGUuXG4gICAgICovXG4gICAgcHVibGljIHNlbGVjdEhlYWRlckNvbnRlbnRUeXBlIChjb250ZW50VHlwZXM6IHN0cmluZ1tdKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgaWYgKGNvbnRlbnRUeXBlcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0eXBlID0gY29udGVudFR5cGVzLmZpbmQoeCA9PiB0aGlzLmlzSnNvbk1pbWUoeCkpO1xuICAgICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGVudFR5cGVzWzBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNlbGVjdCB0aGUgY29ycmVjdCBhY2NlcHQgY29udGVudC10eXBlIHRvIHVzZSBmb3IgYSByZXF1ZXN0LlxuICAgICAqIFVzZXMge0BsaW5rIENvbmZpZ3VyYXRpb24jaXNKc29uTWltZX0gdG8gZGV0ZXJtaW5lIHRoZSBjb3JyZWN0IGFjY2VwdCBjb250ZW50LXR5cGUuXG4gICAgICogSWYgbm8gY29udGVudCB0eXBlIGlzIGZvdW5kIHJldHVybiB0aGUgZmlyc3QgZm91bmQgdHlwZSBpZiB0aGUgY29udGVudFR5cGVzIGlzIG5vdCBlbXB0eVxuICAgICAqIEBwYXJhbSBhY2NlcHRzIC0gdGhlIGFycmF5IG9mIGNvbnRlbnQgdHlwZXMgdGhhdCBhcmUgYXZhaWxhYmxlIGZvciBzZWxlY3Rpb24uXG4gICAgICogQHJldHVybnMgdGhlIHNlbGVjdGVkIGNvbnRlbnQtdHlwZSBvciA8Y29kZT51bmRlZmluZWQ8L2NvZGU+IGlmIG5vIHNlbGVjdGlvbiBjb3VsZCBiZSBtYWRlLlxuICAgICAqL1xuICAgIHB1YmxpYyBzZWxlY3RIZWFkZXJBY2NlcHQoYWNjZXB0czogc3RyaW5nW10pOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICBpZiAoYWNjZXB0cy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB0eXBlID0gYWNjZXB0cy5maW5kKHggPT4gdGhpcy5pc0pzb25NaW1lKHgpKTtcbiAgICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGFjY2VwdHNbMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIE1JTUUgaXMgYSBKU09OIE1JTUUuXG4gICAgICogSlNPTiBNSU1FIGV4YW1wbGVzOlxuICAgICAqICAgYXBwbGljYXRpb24vanNvblxuICAgICAqICAgYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEY4XG4gICAgICogICBBUFBMSUNBVElPTi9KU09OXG4gICAgICogICBhcHBsaWNhdGlvbi92bmQuY29tcGFueStqc29uXG4gICAgICogQHBhcmFtIG1pbWUgLSBNSU1FIChNdWx0aXB1cnBvc2UgSW50ZXJuZXQgTWFpbCBFeHRlbnNpb25zKVxuICAgICAqIEByZXR1cm4gVHJ1ZSBpZiB0aGUgZ2l2ZW4gTUlNRSBpcyBKU09OLCBmYWxzZSBvdGhlcndpc2UuXG4gICAgICovXG4gICAgcHVibGljIGlzSnNvbk1pbWUobWltZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAgIGNvbnN0IGpzb25NaW1lOiBSZWdFeHAgPSBuZXcgUmVnRXhwKCdeKGFwcGxpY2F0aW9uXFwvanNvbnxbXjsvIFxcdF0rXFwvW147LyBcXHRdK1srXWpzb24pWyBcXHRdKig7LiopPyQnLCAnaScpO1xuICAgICAgICByZXR1cm4gbWltZSAhPSBudWxsICYmIChqc29uTWltZS50ZXN0KG1pbWUpIHx8IG1pbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2FwcGxpY2F0aW9uL2pzb24tcGF0Y2granNvbicpO1xuICAgIH1cbn1cbiJdfQ==