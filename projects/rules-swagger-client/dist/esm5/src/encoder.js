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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jb2Rlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3J1bGVzLXN3YWdnZXItY2xpZW50L3NyYy8iLCJzb3VyY2VzIjpbImVuY29kZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFJLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRWhFOzs7O0VBSUU7QUFDRjtJQUFnRCw4Q0FBb0I7SUFBcEU7O0lBU0EsQ0FBQztJQVJHLDhDQUFTLEdBQVQsVUFBVSxDQUFTO1FBQ2YsQ0FBQyxHQUFHLGlCQUFNLFNBQVMsWUFBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxnREFBVyxHQUFYLFVBQVksQ0FBUztRQUNqQixDQUFDLEdBQUcsaUJBQU0sV0FBVyxZQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNMLGlDQUFDO0FBQUQsQ0FBQyxBQVRELENBQWdELG9CQUFvQixHQVNuRSIsInNvdXJjZXNDb250ZW50IjpbIiAgICBpbXBvcnQgeyBIdHRwVXJsRW5jb2RpbmdDb2RlYyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuLyoqXG4qIEN1c3RvbUh0dHBVcmxFbmNvZGluZ0NvZGVjXG4qIEZpeCBwbHVzIHNpZ24gKCspIG5vdCBlbmNvZGluZywgc28gc2VudCBhcyBibGFuayBzcGFjZVxuKiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzExMDU4I2lzc3VlY29tbWVudC0yNDczNjczMThcbiovXG5leHBvcnQgY2xhc3MgQ3VzdG9tSHR0cFVybEVuY29kaW5nQ29kZWMgZXh0ZW5kcyBIdHRwVXJsRW5jb2RpbmdDb2RlYyB7XG4gICAgZW5jb2RlS2V5KGs6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGsgPSBzdXBlci5lbmNvZGVLZXkoayk7XG4gICAgICAgIHJldHVybiBrLnJlcGxhY2UoL1xcKy9naSwgJyUyQicpO1xuICAgIH1cbiAgICBlbmNvZGVWYWx1ZSh2OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICB2ID0gc3VwZXIuZW5jb2RlVmFsdWUodik7XG4gICAgICAgIHJldHVybiB2LnJlcGxhY2UoL1xcKy9naSwgJyUyQicpO1xuICAgIH1cbn1cblxuIl19