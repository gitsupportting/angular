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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jb2Rlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NsYXNzaWZ5LXRleHQtc3dhZ2dlci1jbGllbnQvc3JjLyIsInNvdXJjZXMiOlsiZW5jb2Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUksT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFaEU7Ozs7RUFJRTtBQUNGO0lBQWdELDhDQUFvQjtJQUFwRTs7SUFTQSxDQUFDO0lBUkcsOENBQVMsR0FBVCxVQUFVLENBQVM7UUFDZixDQUFDLEdBQUcsaUJBQU0sU0FBUyxZQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELGdEQUFXLEdBQVgsVUFBWSxDQUFTO1FBQ2pCLENBQUMsR0FBRyxpQkFBTSxXQUFXLFlBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0wsaUNBQUM7QUFBRCxDQUFDLEFBVEQsQ0FBZ0Qsb0JBQW9CLEdBU25FIiwic291cmNlc0NvbnRlbnQiOlsiICAgIGltcG9ydCB7IEh0dHBVcmxFbmNvZGluZ0NvZGVjIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG4vKipcbiogQ3VzdG9tSHR0cFVybEVuY29kaW5nQ29kZWNcbiogRml4IHBsdXMgc2lnbiAoKykgbm90IGVuY29kaW5nLCBzbyBzZW50IGFzIGJsYW5rIHNwYWNlXG4qIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTEwNTgjaXNzdWVjb21tZW50LTI0NzM2NzMxOFxuKi9cbmV4cG9ydCBjbGFzcyBDdXN0b21IdHRwVXJsRW5jb2RpbmdDb2RlYyBleHRlbmRzIEh0dHBVcmxFbmNvZGluZ0NvZGVjIHtcbiAgICBlbmNvZGVLZXkoazogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgayA9IHN1cGVyLmVuY29kZUtleShrKTtcbiAgICAgICAgcmV0dXJuIGsucmVwbGFjZSgvXFwrL2dpLCAnJTJCJyk7XG4gICAgfVxuICAgIGVuY29kZVZhbHVlKHY6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHYgPSBzdXBlci5lbmNvZGVWYWx1ZSh2KTtcbiAgICAgICAgcmV0dXJuIHYucmVwbGFjZSgvXFwrL2dpLCAnJTJCJyk7XG4gICAgfVxufVxuXG4iXX0=