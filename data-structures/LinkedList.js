class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  print() {
    let current = this.head;
    let list = []
    while(current) {
      list.push(current.value);
      current = current.next
    }
    return list;
  }
}

const l1 = new LinkedList(0);
// l1.append(4)
// l1.append(3)



const l2 = new LinkedList(7);
l2.append(3)
// l2.append(4)



/**
 * https://leetcode.com/problems/add-two-numbers/
 * return LinkedList
 * @param {linked list} l1 class LinkedList
 * @param {linked list} l2 class LinkedList
 */
const addTwoNumbers = (l1, l2) => {
  let _l1 = l1.head;
  let _l2 = l2.head;
  const dummy = new LinkedList(0);
  current = dummy;
  let carry = 0;

  while(_l1 || _l2 || carry) {
    let p = _l1 ? _l1.value : 0;
    let q = _l2 ? _l2.value : 0;

    // sum the value
    let sum = p + q + carry;

    // calculate the carry -> 8 + 7 = 15 -> 1 is the carry
    carry = Math.floor(sum / 10);
    sum = Math.floor(sum % 10);

    // update the linked list
    dummy.append(sum)
    
    // update the _l1 and _l2 pointers
    _l1 = _l1 ? _l1.next : null;
    _l2 = _l2 ? _l2.next : null;
  }
  return dummy.print();

}


console.log('addTwoNumbers ->', addTwoNumbers(l1, l2));