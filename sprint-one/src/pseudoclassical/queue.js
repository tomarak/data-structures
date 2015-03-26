var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.beginning = 0;
  this.end = 0;
}

Queue.prototype.enqueue = function(value){
  this.storage[this.end] = value;
  this.end++;
}

Queue.prototype.dequeue = function(){
  var result;
  if(this.end > this.beginning){
    result = this.storage[this.beginning];
    delete this.storage[this.beginning];
    this.beginning++;
  }

  return result;
}

Queue.prototype.size = function(){
  return this.end - this.beginning;
}



