var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // Implement the methods below
  var count = 0;
  var dequePos = 0;
  var enqueuePos = 0;

  someInstance.enqueue = function(value) {
    storage[enqueuePos] = value;
    count++;
    enqueuePos++;
  };

  someInstance.dequeue = function() {
    if (count > 0) {
      var temp = storage[dequePos];
      delete storage[dequePos];
      count--;
      dequePos++;
      return temp;
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
