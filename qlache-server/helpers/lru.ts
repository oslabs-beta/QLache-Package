import { DoublyLinkedListVal } from "./doublyLL";

export class LRU {
  list: DoublyLinkedListVal;
  cache: any;
  capacity: number;
  constructor(capacity: number) {
    this.list = new DoublyLinkedListVal();
    this.capacity = capacity;
    this.cache = {};
  }

  get(key: string) {
    if (this.cache[key]) {
      const value = this.cache[key].value;
      this.list.findAndDelete(this.cache[key]);
      this.list.add(key, value, null);
      return value;
    } else return;
  }

  post(key: string, value: any) {
    const newNode = this.list.add(key, value, null);
    this.cache[key] = newNode;
    if (this.list.length > this.capacity) {
      this.list.delete();
    }
  }
}
