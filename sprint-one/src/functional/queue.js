var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var counter = 0;
  var storage = {};
  var incrementer = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    counter++;
    storage[counter] = value;
    if (value === 'z') {
      debugger;
    }
  };

  someInstance.dequeue = function() {
  
    var smallestKey = Object.keys(storage)[0];
    if (counter > 0) {
      counter--;  
    }
    var output = storage[smallestKey];
    delete storage[smallestKey];
    return output;

  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
