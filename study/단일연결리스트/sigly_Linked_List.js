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
    push(val) { // 연결리스트 마지막에 추가 함수
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
    pop() { // 연결리스트 tail 제거함수
        if( this.length === 0 ) return undefined;
        
        let current = this.head;
        let prevNode = current;
        while( current.next != null ) {
            current = current.next;
            prevNode = current;
        }
        this.tail = prevNode;
        this.tail.next = null;
        this.length--;
        if( this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }
    shift() { // 연결리스트 head 제거 함수
        if( this.length === 0 ) return undefined;

        let current = this.head;
        this.head = current.next;
        this.length--;
        if( this.length === 0) {
            this.tail = null;
        }

        return current;
    }
    unshift(val) { // 연결리스트 맨앞부분에 추가 함수
        let newNode = new Node(val);
        if( this.head === null ) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if( index < 0 || index > this.length ) return null;
        if( this.length === 0 ) return undefined;
        
        let current = this.head;
        let counter = 0;
        while( index !== counter ) {
            current = current.next;
            counter++;
        }

        return current;
    }
    set(index, val) {
        let findNode = get(index);
        if( findNode === null || findNode === undefined ) return false;

        findNode.val = val;
        return true;
    }
    insert(index, val) {
        if( index < 0 || index > this.length ) return false;
        if( index === this.length ) {
            this.push(val);
            return true;
        }
        if( index === 0 ) return !!this.unshift(val);
        
        let findNode = this.get(index-1);
        let newNode = new Node(val);
        newNode.next = findNode.next;
        findNode.next = newNode;
        this.length++;
        return true; 
    }
    remove(index) {
        if( index < 0 || index >= this.length ) return undefined;
        if( index === this.length-1 ) return this.pop();
        if( index === 0 ) return this.shift();

        let prevNode = this.get(index-1);
        let removeNode = prevNode.next;
        let relationNode = removeNode.next;

        prevNode.next = relationNode;
        this.length--;

        return removeNode;
    }
    reverse() {
        let tail = this.head;
        let head = this.tail;
        
        // 1[tail] 2 3 4 5[head]
        // let nextNode = tail.next -- 2
        // let tailnextnext = tailnext.next -- 3 4 5
        // tailnext.next = tail;

        let current = tail; // 2
        for( let i = 1; i < this.length - 1; i++ ) {
            let nextNode = current.next; // 2
            let nextNodeChile = nextNode.next; // 3 4
            

            current = nextNode.next;
        } 
    }
}

let list = new SingLikedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
console.log(list.get(0));
console.log(list.get(2));

// 1 [ Node : 2 [ Node : 3 [ Node : 4 [ Node : null ]]]]