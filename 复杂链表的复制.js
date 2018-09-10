/**
 * 输入一个复杂链表（每个节点中有节点值，以及两个指针，一个指向下一个节点，
 * 另一个特殊指针指向任意一个节点），返回结果为复制后复杂链表的head。
 * （注意，输出结果中请不要返回参数中的节点引用，否则判题程序会直接返回空）
 */

 function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}

function Clone(pHead)
{
    // write code here
    if(pHead === null){
        return null;
    }
    var cur = pHead;
    var tmp, newHead = null;
    while(cur){
        tmp = new RandomListNode(cur.label);
        tmp.next = cur.next;
        cur.next = tmp;
        cur = cur.next.next;
    }
    cur = pHead;
    while(cur){
        if(cur.random){
            cur.next.random = cur.random.next;cur.next
        }
        cur = cur.next.next;
    }
    cur = pHead.next;
    newHead = pHead.next;
    while(cur && cur.next){
        cur.next = cur.next.next;
        cur = cur.next;
    }
    return newHead;
}