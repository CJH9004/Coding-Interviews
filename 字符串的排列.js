/**
 * 输入一个字符串,按字典序打印出该字符串中字符的所有排列。
 * 例如输入字符串abc,则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
 * 输入一个字符串,长度不超过9(可能有字符重复),字符只包括大小写字母。
 */

function _permutation(k, str, ret){
    var tmpArr = [];
    if(k === str.length-1){
        ret.push(str);
        return;
    }
    for(var i = k; i < str.length; i++){
        if(k === i){
            _permutation(k + 1, str, ret);
        }
        if(str[k] !== str[i]){
            tmpArr = str.split('');
            [tmpArr[k], tmpArr[i]] = [tmpArr[i], tmpArr[k]];
            str = tmpArr.join('');
            _permutation(k + 1, str, ret);
        }
    }
}
function Permutation(str)
{
    // write code here
    if(str === ''){
        return [];
    }
    var ret = [];
    _permutation(0, str, ret);
    return ret;
}