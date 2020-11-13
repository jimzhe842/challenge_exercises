class CircularBuffer {
  constructor(bufferSize) {
    this.size = bufferSize;
    this.elements = new Array(bufferSize);
    this.currentIndex = 0;
    this.oldestIndex = 0;
    this.filled = 0;
  }

  write(item) {
    if (item === undefined || item === null) {
      return;
    } else if (this.filled === this.size) {
      throw "Buffer is full";
    } else {
      this.elements[this.currentIndex] = item;
      this.currentIndex = (this.currentIndex + 1) % this.size;
      this.filled++;
    }
  }

  read() {
    if (this.filled === 0) {
      throw "Buffer is empty";
    } else {
      this.filled--;
      let item = this.elements[this.oldestIndex];
      this.oldestIndex = (this.oldestIndex + 1) % this.size;
      return item;
    }
  }

  forceWrite(item) {
    if (this.filled === this.size) {
      this.elements[this.oldestIndex] = item;
      this.oldestIndex = (this.oldestIndex + 1) % this.size; // What if you keep force writing?
    } else {
      this.elements[this.currentIndex] = item;
      this.currentIndex = (this.currentIndex + 1) % this.size;
      this.filled++;
    }
  }

  clear() {
    this.filled = 0;
    this.currentIndex = 0;
    this.oldestIndex = 0;
    this.elements = new Array(this.size);
  }
}

module.exports = CircularBuffer;