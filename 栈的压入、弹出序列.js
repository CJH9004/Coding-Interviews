/**
 * 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。
 * 假设压入栈的所有数字均不相等。
 * 例如序列1,2,3,4,5是某栈的压入顺序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，
 * 但4,3,5,1,2就不可能是该压栈序列的弹出序列。
 * （注意：这两个序列的长度是相等的）
 */

function IsPopOrder(pushV, popV)
{
    // write code here
    if(pushV.length === 0){
        return false;
    }
    var stack = [];
    for(var i = 0, j = 0; i < pushV.length;){
        stack.push(pushV[i++]);
        while(j < popV.length && popV[j] === stack[stack.length-1]){
            stack.pop();
            j++;
        }
    }
    return stack.length === 0;
}