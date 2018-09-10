/**
 * 输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
 */

function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function Tree(obj){
    var root;
    function buildTree(root, obj){
        if(obj.val === undefined){
            return null;
        }
        root = new TreeNode(obj.val);
        root.left = buildTree(root.left, obj.left);
        root.right = buildTree(root.right, obj.right);
        return root;
    }
    root = buildTree(root, obj);
    return root;
}

// test code
var t = new Tree({
    val: 1,
    left: {
        val: 2,
        left: {
            val: 6,
            left: {},
            right: {}
        },
        right: {
            val: 3,
            left: {},
            right: {}
        }
    },
    right: {
        val: 4,
        left: {
            val: 5,
            left: {},
            right: {}
        },
        right: {
            val: 7,
            left: {},
            right: {}
        }
    }
});

function HasSubtree(root1, root2) {
    var result = false;
    //当Tree1和Tree2都不为零的时候，才进行比较。否则直接返回false
    if (root2 != null && root1 != null) {
        //如果找到了对应Tree2的根节点的点
        if(root1.val == root2.val){
            //以这个根节点为为起点判断是否包含Tree2
            result = doesTree1HaveTree2(root1,root2);
        }
        //如果找不到，那么就再去root的左儿子当作起点，去判断时候包含Tree2
        if (!result) {
            result = HasSubtree(root1.left,root2);
        }
            
        //如果还找不到，那么就再去root的右儿子当作起点，去判断时候包含Tree2
        if (!result) {
            result = HasSubtree(root1.right,root2);
            }
        }
        //返回结果
    return result;
}

function doesTree1HaveTree2(node1, node2) {
    //如果Tree2已经遍历完了都能对应的上，返回true
    if (node2 == null) {
        return true;
    }
    //如果Tree2还没有遍历完，Tree1却遍历完了。返回false
    if (node1 == null) {
        return false;
    }
    //如果其中有一个点没有对应上，返回false
    if (node1.val != node2.val) {  
            return false;
    }
        
    //如果根节点对应的上，那么就分别去子节点里面匹配
    return doesTree1HaveTree2(node1.left,node2.left) && doesTree1HaveTree2(node1.right,node2.right);
}