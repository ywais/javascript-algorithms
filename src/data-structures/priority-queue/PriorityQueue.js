export default class PriorityQueue{
  constructor() {
    this.collection = [];
  }

  isEmpty() {
    return (this.collection.length === 0);
  }

  add(value, priority) {
    if(this.isEmpty()) {
      return (this.collection = [[value, priority]]);
    }
    for (let i = 0; i < this.collection.length; i++) {
      if (this.collection[i][1] <= priority) {
        this.collection.splice(i, 0, [value, priority]);
        return (this.collection);
      }
    }
    this.collection.push([value, priority]);
    return (this.collection);
  }

  peek() {
    return (this.isEmpty() ? null : this.collection[this.collection.length - 1][0]);
  }

  poll() {
    return (this.isEmpty() ? null : this.collection.pop()[0]);
  }

  changePriority(value, priority) {
    if(this.isEmpty()) {
      return (null);
    }
    for (let i = 0; i < this.collection.length; i++) {
      if (this.collection[i][0] === value) {
        this.collection.splice(i, 1);
        this.add(value, priority);
        return (this.collection);
      }
    }
    return (null);
  }

  hasValue(value) {
    if(this.isEmpty()) {
      return (false);
    }
    for (let i = 0; i < this.collection.length; i++) {
      if (this.collection[i][0] === value) {
        return (true);
      }
    }
    return (false);
  }
}
