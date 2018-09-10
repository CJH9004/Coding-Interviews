/**
 * LL今天心情特别好,因为他去买了一副扑克牌,
 * 发现里面居然有2个大王,2个小王(一副牌原本是54张^_^)...
 * 他随机从中抽出了5张牌,想测测自己的手气,看看能不能抽到顺子,如果抽到的话,
 * 他决定去买体育彩票,嘿嘿！！“红心A,黑桃3,小王,大王,方片5”,
 * “Oh My God!”不是顺子.....LL不高兴了,他想了想,决定大\小 王可以看成任何数字,
 * 并且A看作1,J为11,Q为12,K为13。上面的5张牌就可以变成“1,2,3,4,5”(大小王分别看作2和4),
 * “So Lucky!”。LL决定去买体育彩票啦。 
 * 现在,要求你使用这幅牌模拟上面的过程,然后告诉我们LL的运气如何， 
 * 如果牌能组成顺子就输出true，否则就输出false。
 * 为了方便起见,你可以认为大小王是0。
 */

function IsContinuous(numbers)
{
    // write code here
    // 1）数组的长度为5； 
    // 2）数组中的最大值减去最小值小于5（最大值、最小值不取0）； 
    // 3）除0外没有重复的数字。
    if(numbers.length != 5){
        return false;
    }
    var min = 14;
    var max = -1;
    var flag = 0;
    for(var i = 0; i < numbers.length; i++) {
        var number = numbers[i];
        if(number < 0 || number > 13){
            return false;
        }
        if(number == 0){
            continue;
        }
        
        // 将1右移numbers[i]位，然后与flag进行按位与运算
        // 若flag上的第numbers[i]已为1，说明该位已被占用，
        // 数字重复了，运算的结果大于0,返回false
        if(((flag >> number) & 1) == 1){
            return false;
        }
        
        // 我们用到了位运算来判断数组中是否存在重复值，它的原理简单且实用： 
        // 因为我们的数字范围为1-13，用每一个bit对应一个数字，
        // 如果出现过，那么flag上这个bit就为1，不然就是0，
        // 且用一个32bit的int型足够容纳下所有位。
        flag |= (1 << number);
        
        if(number > max){
            max = number;
        }
        if(number < min){
            min = number;
        }
        if(max - min >= 5) {
            return false;
        }
    }
    return true;
}