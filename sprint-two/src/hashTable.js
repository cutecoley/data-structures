var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
 var index = getIndexBelowMaxForKey(k, this._limit);
 if (this._storage.get(index) === undefined)
    this._storage.set(index, []);
 var bucket = this._storage.get(index)
 var found = false;
 _.each(bucket, function(item) {
 	if (item[0]=== k) {
 		item[1] = v;
 		found = true;
 	}
 })

 if (!found)
  bucket.push([k, v]);

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  var bucket = this._storage.get(index) 
  var result;
  if (bucket)
  {
  	_.each(bucket, function(item) {
	 	if (item[0]=== k) {
	 		result = item[1];
	 	}
	})
  }
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index)
 
  if (bucket)
  {
  	_.each(bucket, function(item) {
	 	if (item[0]=== k) {
	 		item[1] = undefined;
	 		item[0] = undefined;
	 	}
 	})


  }
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */