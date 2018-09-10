/**
 *  * 题目描述
 * 如果第二个参数 bUnicode255For1 === true，则所有字符长度为 1
 * 否则如果字符 Unicode 编码 > 255 则长度为 2
 * 示例1
 * 输入
 * 复制
 * 'hello world, 牛客', false
 * 输出
 * 复制
 * 17
 */

function strLength(s, bUnicode255For1) {
    if( bUnicode255For1 ){
        return s.length;
    }else{
        var len = s.length;
        for( var i=0; i<s.length; i++ ){
            if( s.charCodeAt(i) > 255 ){
                len++;
            }
        }
        return len;
    }
}
