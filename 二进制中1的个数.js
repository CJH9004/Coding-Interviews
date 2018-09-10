/**
 * 输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
 */

function NumberOf1(n)
{
    // write code here
    if(n < 0){
        n = 4294967296 + n;
    }
    var tmp = n.toString(2);
    var cnt = 0;
    for(var i = 0, len = tmp.length; i < len; i++){
        if(tmp[i] === '1'){
            cnt++;
        }
    }
    return cnt;
}