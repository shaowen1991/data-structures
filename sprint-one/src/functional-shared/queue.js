var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.storage = {};
  newQueue.count = 0;
  newQueue.dequePos = 0;
  newQueue.enqueuePos = 0;
  _.extend(newQueue, queueMethods);
  return newQueue;
};

var queueMethods = {};


queueMethods.enqueue = function(value) {
  this.storage[this.enqueuePos] = value;
  this.count++;
  this.enqueuePos++;
};

queueMethods.dequeue = function() {
  if (this.count > 0) {
    var temp = this.storage[this.dequePos];
    delete this.storage[this.dequePos];
    this.count--;
    this.dequePos++;
    return temp;
  }
};

queueMethods.size = function() {
  return this.count;
};
