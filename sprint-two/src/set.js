var Set = function() {
  var set = Object.create(setPrototype);
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  var oldLength = Object.keys(this).length;
  var newKey = 0;
  if (oldLength !== 0) {
    newKey = oldLength;
  }
  this[newKey] = item;
};

setPrototype.contains = function(target) {
  for (var key in this) {
    if (this[key] === target) {
      return true;
    }
  }
  return false;
};

setPrototype.remove = function(target) {
  for (var key in this) {
    if (this[key] === target) {
      delete this[key];
    }
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
