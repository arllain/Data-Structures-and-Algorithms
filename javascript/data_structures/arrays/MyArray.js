class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // return the data at index
  get(index) {
    return this.data[index];
  }

  // add an item at the end of the array
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  // remove an item at the end of the array
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  //delete an item at the index
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return lastItem;
  }

  // shift array's items
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

export default MyArray;
