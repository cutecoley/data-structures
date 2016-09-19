var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);

    if (list.tail !== null) {
      var oldTail = list.tail; 
      newNode.prev=oldTail;
      oldTail.next = newNode;        
    } else {
      list.head = newNode;
    }
    list.tail = newNode;

  };

  list.removeHead = function() {
    var oldHead = list.head;
    if (oldHead.next) {
      list.head = oldHead.next;
      list.head.prev = null;
    }
    else
    {
      list.head = null;
      list.tail = null;
    }
    
    return oldHead.value;
  };

  list.contains = function(target) {

    var currentNode = list.head;
    while (currentNode.next !== null) {
      if (currentNode.value === target) {
        return true;
      } 
      currentNode = currentNode.next; 
    }
    if (currentNode.value === target) {
      return true;
    } else {
      return false; 
    }    

  };

  list.addToHead = function(value) {
     var newNode = Node(value);

    if (list.head !== null) {
      var oldHead = list.head; 
      newNode.next=oldHead;
      oldHead.prev = newNode;        
    } else {
      list.tail = newNode;
    }
    list.head = newNode;
  }

  list.removeTail = function(value) {
    if (list.tail !== null) {
      var oldTail = list.tail; 
      list.tail=oldTail.prev;
      list.tail.next = null;        
    } 
  }

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};
