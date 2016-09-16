var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;


  newTree.children = [];  

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  if (this.value === undefined && this.children === null) {
    this.value = value;
  } else {
    var newChild = new Tree(value);
    this.children.push(newChild);
  }

};

treeMethods.contains = function(target, head) {
  var output = false;
  if (head === undefined) {
    head = this;
  } 
  if (head.value === target) {
    output = true;
  }
  var childrenArray = head.children;
  if (childrenArray !== null && childrenArray.length > 0) {
    for (var i = 0; i < childrenArray.length; i++) {
      if (this.contains(target, head.children[i]) === true ) {
        output = true;      
      }
    }
  }
  return output;


};


/*
 * Complexity: What is the time complexity of the above functions?
 */
