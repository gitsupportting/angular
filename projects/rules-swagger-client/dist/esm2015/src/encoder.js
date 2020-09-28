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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5jb2Rlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3J1bGVzLXN3YWdnZXItY2xpZW50L3NyYy8iLCJzb3VyY2VzIjpbImVuY29kZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUksT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFaEU7Ozs7RUFJRTtBQUNGLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxvQkFBb0I7SUFDaEUsU0FBUyxDQUFDLENBQVM7UUFDZixDQUFDLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxXQUFXLENBQUMsQ0FBUztRQUNqQixDQUFDLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QixPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIiAgICBpbXBvcnQgeyBIdHRwVXJsRW5jb2RpbmdDb2RlYyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuLyoqXG4qIEN1c3RvbUh0dHBVcmxFbmNvZGluZ0NvZGVjXG4qIEZpeCBwbHVzIHNpZ24gKCspIG5vdCBlbmNvZGluZywgc28gc2VudCBhcyBibGFuayBzcGFjZVxuKiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzExMDU4I2lzc3VlY29tbWVudC0yNDczNjczMThcbiovXG5leHBvcnQgY2xhc3MgQ3VzdG9tSHR0cFVybEVuY29kaW5nQ29kZWMgZXh0ZW5kcyBIdHRwVXJsRW5jb2RpbmdDb2RlYyB7XG4gICAgZW5jb2RlS2V5KGs6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGsgPSBzdXBlci5lbmNvZGVLZXkoayk7XG4gICAgICAgIHJldHVybiBrLnJlcGxhY2UoL1xcKy9naSwgJyUyQicpO1xuICAgIH1cbiAgICBlbmNvZGVWYWx1ZSh2OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICB2ID0gc3VwZXIuZW5jb2RlVmFsdWUodik7XG4gICAgICAgIHJldHVybiB2LnJlcGxhY2UoL1xcKy9naSwgJyUyQicpO1xuICAgIH1cbn1cblxuIl19