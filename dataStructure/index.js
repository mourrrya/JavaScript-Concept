function Node(element, next = null) {
  this.value = element;
  this.next = next;
}

function LinkedList() {
  this.head = null;

  this.insertFirst = function (ele) {
    const newNode = new Node(ele, this.head);
    this.head = newNode;
  };
}
