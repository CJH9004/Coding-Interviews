/**
 * 输入一个递增排序的数组和一个数字S，在数组中查找两个数，使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的乘积最小的。
 * 输出描述:
 * 对应每个测试案例，输出两个数，小的先输出。
 */

function FindNumbersWithSum(array, sum)
{
    // write code here
    var i = 0, j = array.length - 1;
    while(i < j){
        if(array[i] + array[j] === sum){
            return [array[i], array[j]];
        }else if(array[i] + array[j] > sum){
            j--;
        }else{
            i++;
        }
    }
    return [];
}