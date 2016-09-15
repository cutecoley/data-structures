var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  
  this.counter = 0;
  this.storage = {};
  this.incrementer = 0; 
  
};

Queue.prototype.enqueue = function(value) {
	this.storage[this.counter] = value;
	this.counter++;
};

Queue.prototype.dequeue = function() {
	if(this.incrementer < this.counter){
	  var deleteObj = this.storage[this.incrementer];
	  this.incrementer++;
	  return  deleteObj;
	}

};

Queue.prototype.size = function() {
	return this.counter - this.incrementer;
};
