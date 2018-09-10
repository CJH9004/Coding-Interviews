/**
 * 给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方
 */

function Power(base, exponent)
{
    var res = 1, curr = base, n = exponent;
    if(n < 0){
        if(base==0)
            return;
        exponent = -n;
    }else if(n === 0){// n==0
        return 1;// 0的0次方
    }
    while(exponent !=0 ){
        if((exponent&1) == 1)
            res *= curr;
        curr *= curr;// 翻倍
        exponent >>= 1;// 右移一位
    }
    return n >= 0 ? res : (1/res);
}