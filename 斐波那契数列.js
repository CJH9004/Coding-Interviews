/**
 * 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0）。
 * n<=39
 */

function Fibonacci(n)
{
    // write code here
    var cache = [0, 1];
    Fibonacci = function(n){
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
    return Fibonacci(n);
}