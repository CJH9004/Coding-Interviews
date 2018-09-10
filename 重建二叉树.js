/**
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
 * 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。
 */

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function inOrder(root){
    if(root === null){
        return;
    }
    inOrder(root.left);
    console.log(root.val);
    inOrder(root.right);
}

function reConstructBinaryTree(pre, vin)
{
    // write code here
    if(pre.length === 0){
        return null;
    }
    var root = new TreeNode(pre[0]);
    var i = vin.indexOf(pre[0]);
    root.left = reConstructBinaryTree(pre.slice(1, i + 1), vin.slice(0, i));
    root.right = reConstructBinaryTree(pre.slice(i + 1), vin.slice(i + 1));
    return root;
}

var root = reConstructBinaryTree([1,2,4,7,3,5,6,8], [4,7,2,1,5,3,8,6]);
inOrder(root);