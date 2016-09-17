var BinarySearchTree = function(value) {
 var newTree = Object.create(binaryTreeMethods);
 
 newTree.value = value;
 newTree.left = null;
 newTree.right = null;
 return newTree;
};

var binaryTreeMethods = {};

binaryTreeMethods.insert =  function(value) {
 var newTree = new BinarySearchTree (value);
 var currentTree = this;
 
 if (!this.contains(value))
 {
  	var currentTree = this;
	while (true) {
	 if ((value < currentTree.value) && (currentTree.left !== null) ){
	 	currentTree = currentTree.left;
	 } 
	 else  if (value < currentTree.value) {
	 	currentTree.left = newTree
	 	break;
	 }
	 else if ((value > currentTree.value) && (currentTree.right !== null) ){
	 	currentTree = currentTree.right;
	 }
	 else  if (value > currentTree.value) {
	 	currentTree.right = newTree
	 	break;
	 }	 	
	}

  }
};

binaryTreeMethods.contains =  function(value) {

 var currentTree = this;
 while (true) {
	 if (currentTree.value === value){
	 	return true;
	 }

	 if ((value < currentTree.value) && (currentTree.left !== null) ){
	 	currentTree = currentTree.left;
	 } 
	 else if ((value > currentTree.value) && (currentTree.right !== null) ){
	 	currentTree = currentTree.right;
	 }
	 else {
	 	return  false;
	 }	 	
 }
 return false;
};

binaryTreeMethods.depthFirstLog =  function(cb) {

 function processCB(currentTree) {
  if (currentTree) {
   cb.apply(this, [currentTree.value]);
   if (currentTree.left !== null)
   {
    processCB(currentTree.left)
   }
   if (currentTree.right !== null)
   {
    processCB(currentTree.right)
   }
  }
 }
 processCB(this);

};

/*
 * Complexity: What is the time complexity of the above functions?
 */