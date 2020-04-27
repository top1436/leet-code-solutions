var addTwoNumbers = function(l1, l2) {
    const tmp1 = [];
    tmp1.push(l1.val);
    let cur1 = l1;
    while (cur1.next) {
        tmp1.push(cur1.next.val);
        cur1 = cur1.next;
    }        
    let a = [];
    while (tmp1.length) {
        a.push(tmp1.pop());
    }

    const tmp2 = [];
    tmp2.push(l2.val);
    let cur2 = l2;
    while (cur2.next) {
        tmp2.push(cur2.next.val);
        cur2 = cur2.next;
    }        
    let b = [];
    while (tmp2.length) {
        b.push(tmp2.pop());
    }

    const length = a.length >= b.length ? a.length : b.length;
    let sumMok = 0;
    let sumR = 0;
    let answerArray = [];
    for (i = 1; i <= length; i += 1) {
        let sumA = 0;
        let sumB = 0;        
        let aIndex = a.length - i;
        let bIndex = b.length - i;
        if (aIndex >= 0) {
            sumA = a[aIndex];
        }

        if (bIndex >= 0) {
            sumB = b[bIndex];
        }

        let sum = sumMok + sumA + sumB;        
        sumR = sum % 10;
        sumMok = Math.floor(sum / 10);        
        answerArray.push(sumR);
    }

    let curNode = new ListNode(answerArray[0]);
    let answer = curNode;
    if (answerArray.length === 1 && sumMok === 1) {
        curNode.next = new ListNode(1);
        return answer;
    }
    
    for (let i = 1; i < answerArray.length; i += 1) {
        curNode.next = new ListNode(answerArray[i]);
        curNode = curNode.next;
    }
    
     if (sumMok === 1) {
        curNode.next = new ListNode(1);
    }
    
    return answer;
}