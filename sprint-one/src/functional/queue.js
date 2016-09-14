var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var counter = 0;
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    counter++;
  };

  someInstance.dequeue = function() {
  };

  someInstance.size = function() {
    return 0;
  };

  return someInstance;
};
