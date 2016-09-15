var Stack = function() {
 var someInstance = Object.create(stackMethods);
  someInstance.counter = 0;
  someInstance.storage = {};
  

  return someInstance;
};

var stackMethods = {};

// Implement the methods below
  
stackMethods.push = function(value) { 
  this.storage[this.counter] = value; 
  this.counter++;
};

stackMethods.pop = function() {    
  if (this.counter > 0) {
    this.counter--;
  }
  return this.storage[this.counter];
};

stackMethods.size = function() {
  return this.counter;
};

