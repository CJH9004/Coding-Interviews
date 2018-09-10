/**
 * 把只包含质因子2、3和5的数称作丑数（Ugly Number）。
 * 例如6、8都是丑数，但14不是，因为它包含质因子7。 
 * 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。
 */

function GetUglyNumber_Solution(index) {
    // write code here
    if (index < 7) {
        return index;
    }
    var res = [];
    res[0] = 1;
    var t2 = 0,
        t3 = 0,
        t5 = 0,
        i = 1;

    GetUglyNumber_Solution = function(index){
        if(index <= i){
            return res[index - 1];
        }
        for (; i < index; ++i) {
            res[i] = Math.min(res[t2] * 2, Math.min(res[t3] * 3, res[t5] * 5));
            if (res[i] == res[t2] * 2) t2++;
            if (res[i] == res[t3] * 3) t3++;
            if (res[i] == res[t5] * 5) t5++;
        }
        return res[index - 1];
    }
    return GetUglyNumber_Solution(index);
}

function GetUglyNumber_Solution2(index)
{
    // write code here
    if (index < 7){
        return index;
    }
    var res = new Array(index);
    res[0] = 1;
    var t2 = 0, t3 = 0, t5 = 0, i;
    for (i = 1; i < index; ++i){
        res[i] = Math.min(res[t2] * 2, Math.min(res[t3] * 3, res[t5] * 5));
        if (res[i] == res[t2] * 2)t2++;
        if (res[i] == res[t3] * 3)t3++;
        if (res[i] == res[t5] * 5)t5++;
    }
    return res[index - 1];
}

console.log(GetUglyNumber_Solution(1000));
console.log(GetUglyNumber_Solution(940));