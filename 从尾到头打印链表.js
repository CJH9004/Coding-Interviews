/**
 * 输入一个链表，按链表值从尾到头的顺序返回一个ArrayList。
 */

function printListFromTailToHead(head)
{
    // write code here
    var arr = [];
    var cur = head;
    while(cur){
        arr.unshift(cur.val);
        cur = cur.next;
    }
    return arr;
}