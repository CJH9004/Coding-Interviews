/**
 * 操作给定的二叉树，将其变换为源二叉树的镜像。
 */

function Mirror(root)
{
    // write code here
    if(root === null){
        return null;
    }
    var tmp = root.left;
    root.left = root.right;
    root.right = tmp;
    Mirror(root.left);
    Mirror(root.right);
    return root;
}