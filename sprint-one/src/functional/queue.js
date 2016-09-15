var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var counter = 0;
  var storage = {};
  var incrementer = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.dequeue = function() {
    if(incrementer < counter){
      var deleteObj = storage[incrementer];
      incrementer++;
      return  deleteObj;
    }

  };

  someInstance.size = function() {
    return counter - incrementer;
  };

  return someInstance;
};
