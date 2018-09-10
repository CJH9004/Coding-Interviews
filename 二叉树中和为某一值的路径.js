/**
 * 输入一颗二叉树的跟节点和一个整数，打印出二叉树中结点值的和为输入整数的所有路径。
 * 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
 * (注意: 在返回值的list中，数组长度大的数组靠前)
 */

var path = [];
var stack = [];
function FindPath(root, expectNumber)
{
    // write code here
    if(root.val > expextNumber){
        return false;
    }
    if(root.val = expextNumber){
        return path;
    }
    if(root.val < expextNumber){
        expextNumber -= root.val;
        FindPath(root.left, expectNumber);
    }
}