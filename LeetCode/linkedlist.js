class Node {
    constructor(val = null, next = null) {
        this.val = val;
        this.next = next;
    }
}

function createList(arr) {
    let head = null;
    if (arr.length) {
        head = new Node(arr[0]);
        let ptr = head;
        for (let i = 1; i < arr.length; i++) {
            let temp = new Node(arr[i]);
            ptr.next = temp;
            ptr = ptr.next;
        }
    }
    return head;
}

function printList(head) {
    let ptr = head;
    while(ptr) {
        console.log(ptr.val);
        ptr = ptr.next;
    }
}

function checkPalindrome(head) {
    if(!head.next) return true;

    let ptr = head;
    let ltr = '', rtl = '';

    while(ptr) {
        ltr += ptr.val;
        rtl =  ptr.val + rtl;
        ptr = ptr.next;
    }

    return ltr === rtl;
}

const head = createList([1,2,2,0,1,2,1]);
printList(head);
console.log(checkPalindrome(head));