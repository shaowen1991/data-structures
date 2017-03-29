var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count + ''] = value;
    count++;
  };

  someInstance.pop = function() {
    if (count <= 0) {
      return 0;
    }
    count--;
    //count is 1 more than the actual index
    var popValue = storage[count];
    delete storage[count];
    return popValue;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
