var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTreeNode = Tree(value);
  this.children.push(newTreeNode);
};

treeMethods.contains = function(target) {
  //-- Check senior most node value if equal to target
  var startNode = this;

  var containsValue = startNode.value === target;
  //--traverse tree	
  if(containsValue) {
  	return true;
  } else {
  	if(startNode.children.length === 0) {
  	  return false;
  	} else {
      //var boolean = false;
      for (var i = 0; i < startNode.children.length; i++) {
      	var child = startNode.children[i];
      	containsValue = containsValue || child.contains(target);
      }
      return containsValue;
  	}
  }
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
