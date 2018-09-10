/**
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 * 例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。
 * 由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。
 */

function MoreThanHalfNum_Solution(numbers)
{
    // write code here
    var cnt = 0, ret;
    for(var i = 0, len = numbers.length; i < len; i++){
        if(cnt === 0){
            ret = numbers[i];
            cnt++;
        }else if(ret === numbers[i]){
            cnt++;
        }else{
            cnt--;
        }
    }
    cnt = 0;
    for(var i = 0, len = numbers.length; i < len; i++){
        if(ret === numbers[i]){
            cnt++;
        }
    }
    if(cnt > numbers.length/2){
        return ret;
    }else{
        return 0;
    }
}