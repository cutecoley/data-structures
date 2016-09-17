var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);

    if (list.tail !== null) {
      var oldTail = list.tail;
      list.tail.next = newNode;
      
    } else {
      list.head = newNode;
    }
    list.tail = newNode;

  };

  list.removeHead = function() {
    var oldHead = list.head;
    list.head = oldHead .next;
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

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
