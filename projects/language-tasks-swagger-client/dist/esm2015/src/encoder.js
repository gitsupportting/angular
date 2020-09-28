import { HttpUrlEncodingCodec } from '@angular/common/http';
/**
* CustomHttpUrlEncodingCodec
* Fix plus sign (+) not encoding, so sent as blank space
* See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
*/
export class CustomHttpUrlEncodingCodec extends HttpUrlEncodingCodec {
    encodeKey(k) {
        k = super.encodeKey(k);
        return k.replace(/\+/gi, '%2B');
    }
    encodeValue(v) {
        v = super.encodeValue(v);
        return v.replace(/\+/gi, '%2B');
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jb2Rlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xhbmd1YWdlLXRhc2tzLXN3YWdnZXItY2xpZW50L3NyYy8iLCJzb3VyY2VzIjpbImVuY29kZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUksT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFaEU7Ozs7RUFJRTtBQUNGLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxvQkFBb0I7SUFDaEUsU0FBUyxDQUFDLENBQVM7UUFDZixDQUFDLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxXQUFXLENBQUMsQ0FBUztRQUNqQixDQUFDLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIiAgICBpbXBvcnQgeyBIdHRwVXJsRW5jb2RpbmdDb2RlYyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuXHJcbi8qKlxyXG4qIEN1c3RvbUh0dHBVcmxFbmNvZGluZ0NvZGVjXHJcbiogRml4IHBsdXMgc2lnbiAoKykgbm90IGVuY29kaW5nLCBzbyBzZW50IGFzIGJsYW5rIHNwYWNlXHJcbiogU2VlOiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMTA1OCNpc3N1ZWNvbW1lbnQtMjQ3MzY3MzE4XHJcbiovXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21IdHRwVXJsRW5jb2RpbmdDb2RlYyBleHRlbmRzIEh0dHBVcmxFbmNvZGluZ0NvZGVjIHtcclxuICAgIGVuY29kZUtleShrOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGsgPSBzdXBlci5lbmNvZGVLZXkoayk7XHJcbiAgICAgICAgcmV0dXJuIGsucmVwbGFjZSgvXFwrL2dpLCAnJTJCJyk7XHJcbiAgICB9XHJcbiAgICBlbmNvZGVWYWx1ZSh2OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHYgPSBzdXBlci5lbmNvZGVWYWx1ZSh2KTtcclxuICAgICAgICByZXR1cm4gdi5yZXBsYWNlKC9cXCsvZ2ksICclMkInKTtcclxuICAgIH1cclxufVxyXG5cclxuIl19