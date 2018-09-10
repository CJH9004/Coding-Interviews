/**
 * 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
 */

function ListNode(x){
    this.val = x;
    this.next = null;
}

function genList(array){
    var pHead = new ListNode(array[0]);
    var cur = pHead;
    for (let index = 1; index < array.length; index++) {
        const element = array[index];
        cur.next = new ListNode(element);
        cur = cur.next;
    }
    return pHead;
}

function printList(pHead){
    while(pHead){
        console.log(pHead.val);
        pHead = pHead.next;
    }
}

function Merge(pHead1, pHead2)
{
    // write code here
    var pNewHead;
    if(pHead1 == null){
        return pHead2;
    }
    if(pHead2 == null){
        return pHead1;
    }
    if(pHead1.val < pHead2.val){
        pNewHead = pHead1;
        pHead1 = pHead1.next;
    }else{
        pNewHead = pHead2;
        pHead2 = pHead2.next;
    }
    var cur = pNewHead;
    while(pHead1 && pHead2){
        if(pHead1.val < pHead2.val){
            cur.next = pHead1;
            pHead1 = pHead1.next;
        }else{
            cur.next = pHead2;
            pHead2 = pHead2.next;
        }
        cur = cur.next;
    }
    while(pHead1){
        cur.next = pHead1;
        pHead1 = pHead1.next;
        cur = cur.next;
    }
    while(pHead2){
        cur.next = pHead2;
        pHead2 = pHead2.next;
        cur = cur.next;
    }
    return pNewHead;
}

var pHead1 = genList([1,3,5,7,10]);
var pHead2 = genList([1,2,8,9,12,14,15,18]);
printList(Merge(pHead1, pHead2));