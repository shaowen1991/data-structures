var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.tail === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      newNode.prev = list.tail;
      list.tail = newNode;  
    }
  };
/*
  list.removeHead = function() {
    var formerHead = list.head.value;
    list.head = list.head.next;
    list.head.prev = null;
    return formerHead;
  };
*/
  list.removeNode = function(node) {
    //if node is the head
    if(node === list.head) {
      //if there is only one node, node.next = null
      list.head = node.next;
      //if node is not only one node
      if(node.next !== null) {
        //assign new prev of next node to null
        node.next.prev = null;
      } else {
        //only node has been removed, so .tail = null
        list.tail = null;
      }
    //if node is the tail
    //and the node is not the only one in list, (above statement covered that)
    } else if(node === list.tail) {
      //set tail to the prev node
      list.tail = node.prev;
      //set next node of prev node to null
      node.prev.next = null;
    } else {
      //reroute prev's properties and next's properties
      node.next.prev = node.prev; 
      node.prev.next = node.next;
    }
  }

  list.contains = function(target) {
    var searchPtr = list.head;
    while(searchPtr !== null) {
      if (searchPtr.value === target) {
        return true;
      }
      searchPtr = searchPtr.next;
    }
    return false;
  };

  return list;
};



var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;
  return node;
};
