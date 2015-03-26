var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.storageSize = 0;

};

Stack.prototype.push = function(value){
  this.storage[this.storageSize] = value;
  this.storageSize++;
};

Stack.prototype.pop = function(){
  var result;
  if(this.storageSize > 0){
    result = this.storage[this.storageSize - 1];
    delete this.storage[this.storageSize - 1];
    this.storageSize--;
  }
  return result;
};

Stack.prototype.size = function(){
  return this.storageSize;
}


