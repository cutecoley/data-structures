

// Instantiate a new graph
var Graph = function(value) {
	this.node_list = [];
	this.value=value;

};


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	if (!this.contains(node))
	{
		var newNode = new Graph(node);
		this.node_list.push(newNode); 
	}
	
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

	for(var i = 0; i < this.node_list.length; i++) {
		if(node === this.node_list[i].value){
			return true;
		} 

	}
	return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	var removeIndex;
	for(var i = 0; i < this.node_list.length; i++) {
		if(node === this.node_list[i].value){
			removeIndex = i;
		};
	}	
	if(removeIndex !== undefined){
		this.node_list.splice(removeIndex,1);
	}
	
};

Graph.prototype.getNode = function (node)
{
	for(var i = 0; i < this.node_list.length; i++) {
		if(node === this.node_list[i].value){
			return this.node_list[i];
		}
	}
	return null;

}

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	var fromNodeExists = this.contains(fromNode);
    var toNodeExits = this.contains(toNode);
    
    //if one of the node doesn't exists so return false
    if (!fromNodeExists || !toNodeExits) 
    {
    	return false;
    }

    var node1 = this.getNode(fromNode);
    var node2 = this.getNode(toNode);

    if (node1.contains(toNode) && node2.contains(fromNode))
    {
    	return true;
    }
    
    return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

	var fromNodeExists = this.contains(fromNode);
    var toNodeExits = this.contains(toNode);
   
    if (fromNodeExists && toNodeExits) 
    {
    	 //store node releation in edge list
	    var node1 = this.getNode(fromNode);
	    var node2 = this.getNode(toNode);
	    node1.node_list.push(node2);
	    node2.node_list.push(node1);
    }
	
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	var fromNodeExists = this.contains(fromNode);
    var toNodeExists = this.contains(toNode);
   
    if (fromNodeExists && toNodeExists)
    {
    	 //remove node releation in edge list
	    var node1 = this.getNode(fromNode);
	    var node2 = this.getNode(toNode);
	    node1.removeNode(toNode);
	    node2.removeNode(fromNode);

    }
    
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	_.each(this.node_list, function(item) {
		cb.apply(null, [item.value]);
	});
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


