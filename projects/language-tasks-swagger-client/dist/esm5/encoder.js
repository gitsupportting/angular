import { __extends } from "tslib";
import { HttpUrlEncodingCodec } from '@angular/common/http';
/**
* CustomHttpUrlEncodingCodec
* Fix plus sign (+) not encoding, so sent as blank space
* See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
*/
var CustomHttpUrlEncodingCodec = /** @class */ (function (_super) {
    __extends(CustomHttpUrlEncodingCodec, _super);
    function CustomHttpUrlEncodingCodec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomHttpUrlEncodingCodec.prototype.encodeKey = function (k) {
        k = _super.prototype.encodeKey.call(this, k);
        return k.replace(/\+/gi, '%2B');
    };
    CustomHttpUrlEncodingCodec.prototype.encodeValue = function (v) {
        v = _super.prototype.encodeValue.call(this, v);
        return v.replace(/\+/gi, '%2B');
    };
    return CustomHttpUrlEncodingCodec;
}(HttpUrlEncodingCodec));
export { CustomHttpUrlEncodingCodec };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jb2Rlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xhbmd1YWdlLXRhc2tzLXN3YWdnZXItY2xpZW50LyIsInNvdXJjZXMiOlsiZW5jb2Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUksT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFaEU7Ozs7RUFJRTtBQUNGO0lBQWdELDhDQUFvQjtJQUFwRTs7SUFTQSxDQUFDO0lBUkcsOENBQVMsR0FBVCxVQUFVLENBQVM7UUFDZixDQUFDLEdBQUcsaUJBQU0sU0FBUyxZQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELGdEQUFXLEdBQVgsVUFBWSxDQUFTO1FBQ2pCLENBQUMsR0FBRyxpQkFBTSxXQUFXLFlBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0wsaUNBQUM7QUFBRCxDQUFDLEFBVEQsQ0FBZ0Qsb0JBQW9CLEdBU25FIiwic291cmNlc0NvbnRlbnQiOlsiICAgIGltcG9ydCB7IEh0dHBVcmxFbmNvZGluZ0NvZGVjIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuLyoqXHJcbiogQ3VzdG9tSHR0cFVybEVuY29kaW5nQ29kZWNcclxuKiBGaXggcGx1cyBzaWduICgrKSBub3QgZW5jb2RpbmcsIHNvIHNlbnQgYXMgYmxhbmsgc3BhY2VcclxuKiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzExMDU4I2lzc3VlY29tbWVudC0yNDczNjczMThcclxuKi9cclxuZXhwb3J0IGNsYXNzIEN1c3RvbUh0dHBVcmxFbmNvZGluZ0NvZGVjIGV4dGVuZHMgSHR0cFVybEVuY29kaW5nQ29kZWMge1xyXG4gICAgZW5jb2RlS2V5KGs6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgayA9IHN1cGVyLmVuY29kZUtleShrKTtcclxuICAgICAgICByZXR1cm4gay5yZXBsYWNlKC9cXCsvZ2ksICclMkInKTtcclxuICAgIH1cclxuICAgIGVuY29kZVZhbHVlKHY6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgdiA9IHN1cGVyLmVuY29kZVZhbHVlKHYpO1xyXG4gICAgICAgIHJldHVybiB2LnJlcGxhY2UoL1xcKy9naSwgJyUyQicpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=