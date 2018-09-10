/**
 * 求出1~13的整数中1出现的次数,并算出100~1300的整数中1出现的次数？
 * 为此他特别数了一下1~13中包含1的数字有1、10、11、12、13因此共出现6次,
 * 但是对于后面问题他就没辙了。ACMer希望你们帮帮他,并把问题更加普遍化,
 * 可以很快的求出任意非负整数区间中1出现的次数（从1 到 n 中1出现的次数）。
 */

function NumberOf1Between1AndN_Solution(n)
{
    // write code here
    var count = 0;
    var a, b;
    for(var i = 1; i <= n; i *= 10)
    {
        //i表示当前分析的是哪一个数位
        a= Math.floor(n / i);
        b = n % i;
        count = count + 
            Math.floor((a + 8) / 10) * i + 
            Number(a % 10 == 1) * (b + 1);
    }
    return count;
}