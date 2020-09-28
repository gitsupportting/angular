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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jb2Rlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xhbmd1YWdlLXRhc2tzLXN3YWdnZXItY2xpZW50L3NyYy8iLCJzb3VyY2VzIjpbImVuY29kZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFJLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWhFOzs7O0VBSUU7QUFDRjtJQUFnRCw4Q0FBb0I7SUFBcEU7O0lBU0EsQ0FBQztJQVJHLDhDQUFTLEdBQVQsVUFBVSxDQUFTO1FBQ2YsQ0FBQyxHQUFHLGlCQUFNLFNBQVMsWUFBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxnREFBVyxHQUFYLFVBQVksQ0FBUztRQUNqQixDQUFDLEdBQUcsaUJBQU0sV0FBVyxZQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNMLGlDQUFDO0FBQUQsQ0FBQyxBQVRELENBQWdELG9CQUFvQixHQVNuRSIsInNvdXJjZXNDb250ZW50IjpbIiAgICBpbXBvcnQgeyBIdHRwVXJsRW5jb2RpbmdDb2RlYyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbi8qKlxyXG4qIEN1c3RvbUh0dHBVcmxFbmNvZGluZ0NvZGVjXHJcbiogRml4IHBsdXMgc2lnbiAoKykgbm90IGVuY29kaW5nLCBzbyBzZW50IGFzIGJsYW5rIHNwYWNlXHJcbiogU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMTA1OCNpc3N1ZWNvbW1lbnQtMjQ3MzY3MzE4XHJcbiovXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21IdHRwVXJsRW5jb2RpbmdDb2RlYyBleHRlbmRzIEh0dHBVcmxFbmNvZGluZ0NvZGVjIHtcclxuICAgIGVuY29kZUtleShrOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGsgPSBzdXBlci5lbmNvZGVLZXkoayk7XHJcbiAgICAgICAgcmV0dXJuIGsucmVwbGFjZSgvXFwrL2dpLCAnJTJCJyk7XHJcbiAgICB9XHJcbiAgICBlbmNvZGVWYWx1ZSh2OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHYgPSBzdXBlci5lbmNvZGVWYWx1ZSh2KTtcclxuICAgICAgICByZXR1cm4gdi5yZXBsYWNlKC9cXCsvZ2ksICclMkInKTtcclxuICAgIH1cclxufVxyXG5cclxuIl19