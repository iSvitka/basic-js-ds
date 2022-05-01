const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor(){
    this.headNode = null;
    this.countOfNodes = 0; 
  }

  getUnderlyingList() {
    return this.headNode;
  }

  enqueue(value) {
    if(this.countOfNodes === 0){
      this.headNode = new ListNode(value);
    } else {
      let findLastNode = this.headNode;
      
      while(findLastNode.next){
        findLastNode = findLastNode.next;
      }

      findLastNode.next = new ListNode(value);
    }

    this.countOfNodes++;
  }

  dequeue() {
    let deletedNode = this.headNode.value;

    this.headNode = this.headNode.next;
    this.countOfNodes--;

    return deletedNode;
  }
}

module.exports = {
  Queue
};
