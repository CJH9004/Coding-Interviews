/**
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
 * 如果是则输出Yes,否则输出No。
 * 假设输入的数组的任意两个数字都互不相同。
 */

function judge(sequence){
    if(sequence.length === 0){
        return true;
    }
    var tmp = sequence.pop();
    var i = 0;
    while(i < sequence.length && sequence[i] < tmp){
        i++;
    }
    for(var j = i; j < sequence.length; j++){
        if(sequence[j] < tmp){
            return false;
        }
    }
    return judge(sequence.slice(0, i))
            && judge(sequence.slice(i));
}

function VerifySquenceOfBST(sequence)
{
    // write code here
    if(sequence.length === 0){
        return false;
    }
    return judge(sequence);
}