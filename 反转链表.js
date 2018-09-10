/**
 * 输入一个链表，反转链表后，输出新链表的表头。
 */

function ReverseList(pHead)
{
    // write code here
    if(pHead == null || pHead.next == null){
        return pHead;
    }
    var pre = pHead, cur = pre.next, next = cur.next;
    pre.next = null;
    while(next){
        cur.next = pre;
        pre = cur;
        cur = next;
        next = next.next;
    }
    cur.next = pre;
    return cur;
}