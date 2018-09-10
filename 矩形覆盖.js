/**
 * 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。
 * 请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
 */

function rectCover(number)
{
    // write code here
    var cache = [0, 1, 2];
    rectCover = function(n){
        if(n < 0){
            return -1;
        }
        if(n < cache.length){
            return cache[n];
        }
        for(var i = cache.length; i <= n; i++){
            cache[i] = cache[i - 2] + cache[i - 1];
        }
        return cache[n];
    }
    return rectCover(number);
}