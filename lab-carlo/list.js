'use strict';

const List = module.exports = function() {
  for(let key in arguments) {
    this[key] = arguments[key];
  }
  this.length = arguments.length;
};

// O(n)
List.prototype.copy = function() {
  let result = new List();
  for(let key in this) {
    result[key] = this[key];
  }
  return result;
};

// O(n)
List.prototype.push = function(value) {
  let result = this.copy();
  result[result.length++] = value;
  return result;
};

// O(n)
List.prototype.pop = function() {
  let result = this.copy();
  delete result[--result.length];

  return {
    value: this[this.length - 1],
    list: result,
  };
};

//O(n)
List.prototype.forEach = function(callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

//O(n)
List.prototype.filter = function(callback){
  let newArray = [];

  for(let i = 0; i < this.length; i++){
    if(callback(this[i]) === true) {
      newArray.push(this[i]);
    }
  }
};

//O(n)
List.prototype.reduce = function(callback, accumulator) {
  let acc;
  if (accumulator) {
    acc = accumulator;
  } else {
    acc = this[0];
  }

  let i;
  if(accumulator) {
    i = 0;
  } else {
    i = 1;
  }

  for(i; i < this.length; i++){
    acc = callback(acc, this[i]);
  }
  return acc;
};

//O(n)
List.prototype.map = function(callback) {
  let newArray = [];

  for(let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  return newArray;
};

// # Whiteboard Exercise (Groups of 4)
// * Implement `forEach()` as a method of your List Data Structure
// * Implement `filter()` as a method of your List Data Structure
