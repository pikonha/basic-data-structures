export class DataStructure {
  constructor() {
    if (this.constructor === DataStructure) {
      throw new Error("Cannot instantiate abstract class DataStructure");
    }
  }

  add(element) {
    throw new Error("Method 'add()' must be implemented.");
  }

  remove() {
    throw new Error("Method 'remove()' must be implemented.");
  }

  peek() {
    throw new Error("Method 'peek()' must be implemented.");
  }

  isEmpty() {
    throw new Error("Method 'isEmpty()' must be implemented.");
  }

  size() {
    throw new Error("Method 'size()' must be implemented.");
  }
}
