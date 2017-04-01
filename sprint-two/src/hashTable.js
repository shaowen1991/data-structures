var HashTable = function() {
  this._limit = 8;
  this._size = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  var bucket;

  if (this._storage.get(index) === undefined) {
    bucket = DoublyLinkedList();
    this._storage.set(index, bucket);
  } else {
    bucket = this._storage.get(index);
  }

  //iterate on the bucket, to see if there's the same key exsist
  var searchPtr = bucket.head;
  //store the reference of the tuple we found, that has the same key
  var foundTuple = undefined;
  while (searchPtr !== null) {
    if (searchPtr.value[0] === k) {
      foundTuple = searchPtr.value;
      //once found the same key, stop the loop
      break;
    }
    searchPtr = searchPtr.next;
  }
  //if foundTuple is undefined, that means we didn't find the same key
  if (foundTuple === undefined) {
    //add the new tuple to the bucket tail
    bucket.addToTail(tuple);
    this._size++;
  } else {
    //found the tuple, and assign new value in it
    foundTuple[1] = v;
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  //--Use index to retrieve target bucket
  var bucket = this._storage.get(index);

  //--Iterate through the bucket list
  var searchPtr = bucket.head;
  while (searchPtr !== null) {
    if (searchPtr.value[0] === k) {
      return searchPtr.value[1];
    }
    searchPtr = searchPtr.next;
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index);
  //iterate through bucket,
  var searchPtr = bucket.head;
  while (searchPtr !== null) {
    //found the key
    if (searchPtr.value[0] === k) {
      //delete that node in the bucket
      bucket.removeNode(searchPtr);
      this._size--;
    }
    searchPtr = searchPtr.next;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * insert: O(1)
 * retrieve: O(1)
 * remove: O(1)
 *
 */


