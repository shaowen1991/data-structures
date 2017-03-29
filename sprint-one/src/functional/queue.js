var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var dequeuePosition = 0;
  var enqueuePosition = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[enqueuePosition + ''] = value;
    enqueuePosition++;
    count++;
  };

  someInstance.dequeue = function() {
    if (count <= 0) {
      return 0;
    }
    var deqValue = storage[dequeuePosition];
    delete storage[dequeuePosition];
    dequeuePosition++;
    count--;
    return deqValue;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
