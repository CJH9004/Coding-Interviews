/**
 * 输入一个链表，输出该链表中倒数第k个结点。
 */

function FindKthToTail(head, k)
{
    // write code here
    if(head == null){
        return null;
    }
    var p1 = head, p2 = head;
    while(--k){
        p2 = p2.next;
        if(p2 === null){
            return null;
        }
    }
    while(p2 = p2.next){
        p1 = p1.next;
    }
    return p1;
}