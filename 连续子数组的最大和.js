/**
 * HZ偶尔会拿些专业问题来忽悠那些非计算机专业的同学。
 * 今天测试组开完会后,他又发话了:在古老的一维模式识别中,
 * 常常需要计算连续子向量的最大和,当向量全为正数的时候,问题很好解决。
 * 但是,如果向量中包含负数,是否应该包含某个负数,并期望旁边的正数会弥补它呢？
 * 例如:{6,-3,-2,7,-15,1,2,2},连续子向量的最大和为8(从第0个开始,到第3个为止)。
 * 给一个数组，返回它的最大连续子序列的和，你会不会被他忽悠住？(子向量的长度至少是1)
 */

function FindGreatestSumOfSubArray(array)
{
    // write code here
    /*
        j记录当前正在累加的子列的起始位置；
        s<=0与s<0的区别：前者得到最短子列；
    */
    var j = 0, s = 0, sMax = Math.min.apply(this, array);
    for(var i = 0, len = array.length;i < len; i++){
        s += array[i];
        if(s > sMax){
            sMax=s;
        }else if(s<=0){ // 当前子列累和小于等于0时，舍弃当前子列
            s=0;
            j=i+1;
        }
    }
    return sMax;
}