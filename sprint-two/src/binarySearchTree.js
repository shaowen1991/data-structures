var BinarySearchTree = function(value) {
  var binaryTreeNode = {};
  
  binaryTreeNode.value = value;
  binaryTreeNode.left = null;
  binaryTreeNode.right = null;

  binaryTreeNode.insert = function(value) {
    if (value < binaryTreeNode.value) {
      if (binaryTreeNode.left === null) {
        binaryTreeNode.left = BinarySearchTree(value);        
      } else {
        binaryTreeNode.left.insert(value);
      }
    } else {
      if (binaryTreeNode.right === null) {
        binaryTreeNode.right = BinarySearchTree(value);        
      } else {
        binaryTreeNode.right.insert(value);
      }
    }
  };

  binaryTreeNode.contains = function(value) {
    var containsValue = binaryTreeNode.value === value;
    
    if (containsValue) {
      return true;
    } else if (value < binaryTreeNode.value) {
      containsValue = containsValue || binaryTreeNode.left ? binaryTreeNode.left.contains(value) : false;
    } else {
      containsValue = containsValue || binaryTreeNode.right ? binaryTreeNode.right.contains(value) : false;
    }

    return containsValue;
  };

  binaryTreeNode.depthFirstLog = function(cb) {
    if (binaryTreeNode !== null) {
      cb(binaryTreeNode.value);
      binaryTreeNode.left ? binaryTreeNode.left.depthFirstLog(cb) : null;
      binaryTreeNode.right ? binaryTreeNode.right.depthFirstLog(cb) : null;
    }
  };

  return binaryTreeNode;
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * insert: O(log(n))
 * contains: O(log(n))
 * depthFirstLog: O(n)
 *
 */
