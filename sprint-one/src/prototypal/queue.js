var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(queueMethods)
  someInstance.counter = 0;
  someInstance.storage = {};
  someInstance.incrementer = 0; 
  

  return someInstance;
};

var queueMethods = {};


queueMethods.enqueue = function(value) {
this.storage[this.counter] = value;
this.counter++;
};

queueMethods.dequeue = function() {
if(this.incrementer < this.counter){
  var deleteObj = this.storage[this.incrementer];
  this.incrementer++;
  return  deleteObj;
}

};


queueMethods.size = function() {
return this.counter - this.incrementer;
};
