/**
 * 输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个。
 * 例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。
 */

function PrintMinNumber(numbers)
{
    numbers.sort(function(n1, n2){
        if(n1 + '' + n2 > n2 + '' + n1){
            return 1;
        }else if(n1 + '' + n2 < n2 + '' + n1){
            return -1;
        }else{
            return 0;
        }
    });
    return numbers.join('');
}