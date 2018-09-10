/**
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级。
 * 求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
 */

function jumpFloor(number)
{
    // write code here
    var cache = [0, 1, 2];
    jumpFloor = function(n){
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
    return jumpFloor(number);
}