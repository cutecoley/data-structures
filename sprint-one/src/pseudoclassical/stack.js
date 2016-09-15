var Stack = function() {
  this.counter = 0;
  this.storage = {};
 };
  
Stack.prototype.push = function(value) { 
  this.storage[this.counter] = value; 
  this.counter++;
};

Stack.prototype.pop = function() {    
  if (this.counter > 0) {
    this.counter--;
  }
  return this.storage[this.counter];
};

Stack.prototype.size = function() {
  return this.counter;
};

