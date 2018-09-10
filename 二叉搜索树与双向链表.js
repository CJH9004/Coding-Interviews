/**
 * 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。
 * 要求不能创建任何新的结点，只能调整树中结点指针的指向。
 */

function inOrder(node, tmp){
    if(!(node == null)){
        inOrder(node.left, tmp);
        tmp.push(node);
        inOrder(node.right, tmp);
    }
}
function Convert(pRootOfTree)
{
    // write code here
    if(pRootOfTree === null){
        return null;
    }
    var tmp = [];
    inOrder(pRootOfTree, tmp);
    tmp[0].left = null;
    for(var i = 1; i < tmp.length; i++){
        tmp[i].left = tmp[i-1];
        tmp[i-1].right = tmp[i];
    }
    tmp[i-1].right = null;
    return tmp[0];
}