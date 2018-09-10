/**
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。
 */

var stack = [];
var minStack = [];
length = 0;

function push(node)
{
    // write code here
    if(length === 0){
        minStack.push(node);
    }else if(node > minStack[minStack.length-1]){
        stack.push(node);
    }else{
        minStack.push(node);
        stack.push(node);
    }
    length++;
}
function pop()
{
    // write code here
    if(length === 0){
        return null;
    }else if(stack[stack.length-1] === minStack[minStack.length-1]){
        minStack.pop();
        return stack.pop();
    }else{
        return stack.pop();
    }
    length--;
}
function top()
{
    // write code here
    return stack[0];
}
function min()
{
    // write code here
    return minStack[minStack.length-1];
}