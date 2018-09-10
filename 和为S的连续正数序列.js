/**
 * 小明很喜欢数学,有一天他在做数学作业时,要求计算出9~16的和,他马上就写出了正确答案是100。
 * 但是他并不满足于此,他在想究竟有多少种连续的正数序列的和为100(至少包括两个数)。
 * 没多久,他就得到另一组连续正数和为100的序列:18,19,20,21,22。
 * 现在把问题交给你,你能不能也很快的找出所有和为S的连续正数序列? Good Luck!
 * 输出描述:
 * 输出所有和为S的连续正数序列。序列内按照从小至大的顺序，序列间按照开始数字从小到大的顺序
 */

function FindContinuousSequence(sum)
{
    // write code here
    var maxLen = Math.floor((-1 + Math.sqrt(1+8*sum)) / 2), len = maxLen;
    var avg, k = 0;
    var ret = [];
    while(len > 1){
        avg = sum / len;

        // avg为len长度序列的平均值，avg有以下两种情况能得到需要的序列：小数以.5结尾且长度len为偶数，整数且长度为奇数
        if((Math.round(avg * 10 % 10) === 5 && len % 2 === 0)
            || (Math.round(avg * 10 % 10) === 0 && len % 2 === 1)){
            ret[k] = [];

            // 取得avg周围连续len个整数
            for(var i = Math.round(avg - (len / 2)), j = 0; i < Math.round(avg + (len / 2)); i++, j++){
                ret[k][j] = i;
            }
            
            k++;
        }
        len--;
    }
    return ret;
}

console.log(FindContinuousSequence(15));