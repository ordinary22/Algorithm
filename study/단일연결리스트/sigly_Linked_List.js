class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SingLikedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) { // 연결리스트 추가 함수
        let newNode = new Node(val);
        if( this.head === null ) { 
            this.head = newNode
            this.tail = this.head
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() { // 연결리스트 제거함수
        if( this.length === 0 ) return null;
        
        let current = this.head;
        let prevNode = current;
        while( current.next != null ) {
            current = current.next;
            prevNode = current;
        }
        this.tail = prevNode;
        this.tail.next = null;
        this.length--;
        return current;
    }
}

let list = new SingLikedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.pop();

// 1 [ Node : 2 [ Node : 3 [ Node : 4 [ Node : null ]]]]