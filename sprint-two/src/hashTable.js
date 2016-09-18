var HashTable = function() {
  this._size = 0;
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
 	if (item[0] === k) {
 		item[1] = v;
 		found = true;
 	}
 })

 if (!found) {
  bucket.push([k, v]);
  this._size++;

  if (this._size > this._limit * .75) {
  	this.resize(this._limit * 2)
  }
 }
};

HashTable.prototype.resize = function (newSize) {
	//var newSize = Math.Max(this._limit, newSize);
	var oldStorage = this._storage;
	var oldSize= this._limit;
	this._limit = newSize;
	this._storage =  LimitedArray(newSize);
	this._size = 0;
	
	oldStorage.each((function(bucket) {
		if (bucket)
		{
			for (var i = 0; i < bucket.length; i++)  {
				if (bucket[i][0] !== undefined)
					this.insert (bucket[i][0], bucket[i][1]);
			}
		}
	}).bind(this))
	
}

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
  	_.each(bucket, (function(item) {
	 	if (item[0]=== k) {
	 		item[1] = undefined;
	 		item[0] = undefined;
	 		this._size--;
		  
		  if (this._size < this._limit * .25 && this._limit > 8) {		  	
		  	this.resize(Math.floor(this._limit * 1/2));
		  }
	 	}
 	}).bind(this))
  }
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
 /*
 *	In most cases O(1), we are resizing hash table to maintain efficiency. Worst case  is O(n)
 */