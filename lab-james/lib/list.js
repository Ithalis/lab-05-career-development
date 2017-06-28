'use strict';

const List = module.exports = function() {
  for(let key in arguments) {
    this[key] = arguments[key];
  }
  this.length = arguments.length;
};

 // This is O(n)
List.prototype.copy = function() {
  let result = new List();
  for(let key in this) {
    result[key] = this[key];
  }
  return result;
};

 // This is O(n)
List.prototype.push = function(value) {
  let result = this.copy();
  result[result.length++] = value;
  return result;
};

 // This is O(n)
List.prototype.pop = function() {
  let result = this.copy();
  delete result[--result.length];

  return {
    value: this[this.length - 1],
    list: result,
  };
};

 // This is O(n)
List.prototype.forEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

 // This is O(n)
List.prototype.filter = function(callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] === callback) result.push(result);
  }
  return result;

};

 // This is O(n)
List.prototype.map = function (callback) {
  let result = this.copy(this);
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
    result.push(this[i]);
  }
  return result;

};

 // This is O(n)
List.prototype.reduce = function (callback) {
  let result = 0;
  for (let i = 0; i < this.length; i++) {
    result += this[i];
    callback(result, this[i], i, this);
  }
  return result;

};