

// Instantiate a new graph
var Graph = function() {
  this.graph = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.graph[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.graph.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this.graph[node];
  for (var motherNode in this.graph) {
    //the connections of current node, it is a object
    var connections = this.graph[motherNode];
    //delete the connected node of mother node, that equals to target
    for (var childNode in connections) {
      if (childNode === JSON.stringify(node)) {
        delete this.graph[motherNode][childNode];
      }
    }
  }
};
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.graph[fromNode].hasOwnProperty(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.graph[fromNode][toNode] = null;
  this.graph[toNode][fromNode] = null;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.graph[fromNode][toNode];
  delete this.graph[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb, value) {
  for (var node in this.graph) {
    cb(node, value);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 * 	addNode : O(1)
 *	contains : O(1)
 *	removeNode : O(n^2) where N represent nodes number
 *	hasEdge : O(1)
 *	addEdge : O(1)
 *	removeEdge : O(1)
 * 	forEachNode : O(n)
 */


