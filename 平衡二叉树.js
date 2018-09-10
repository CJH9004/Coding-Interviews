/**
 * 输入一棵二叉树，判断该二叉树是否是平衡二叉树。
 */

function IsBalanced_Solution(root) {
    return getDepth(root) != -1;
}

function getDepth(root) {
    if (root == null) return 0;
    var left = getDepth(root.left);
    if (left == -1) return -1;
    var right = getDepth(root.right);
    if (right == -1) return -1;
    return Math.abs(left - right) > 1 ? -1 : 1 + Math.max(left, right);
}