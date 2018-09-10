/**
 * 从上往下打印出二叉树的每个节点，同层节点从左至右打印。
 */

function PrintFromTopToBottom(root)
{
    // write code here
    var queue = [];
    var tmp = [];
    var current = root;
    queue.push(current);
    while(current = queue.shift()){
        if(current.left){
            queue.push(current.left);
        }
        if(current.right){
            queue.push(current.right);
        }
        tmp.push(current.val);
    }
    return tmp;
}