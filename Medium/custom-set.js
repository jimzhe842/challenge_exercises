class CustomSet {
  constructor(array) {
    this.set = array || [];
  }

  empty() {
    return this.set.length === 0;
  }

  contains(item) {
    return (this.set.indexOf(item) > -1);
  }

  subset(customSet) {
    let otherSet = customSet.set;
    return this.set.every(item => otherSet.indexOf(item) > -1);
  }

  disjoint(customSet) {
    let otherSet = customSet.set;
    return this.set.every(item => otherSet.indexOf(item) === -1);
  }

  eql(customSet) {
    let otherSet = customSet.set;
    return (otherSet.length === this.set.length) && this.subset(customSet);
  }

  add(item) {
    if (this.set.indexOf(item) === -1) {
      // console.log(this.set);
      this.set.push(item); // sorted?
    }
    return this;
  }

  intersection(customSet) {
    let otherSet = customSet.set;
    let intersectingSet = [];
    this.set.forEach(item => {
      if (otherSet.indexOf(item) > -1) {
        intersectingSet.push(item);
      }
    });
    return new CustomSet(intersectingSet);
  }

  difference(customSet) {
    let otherSet = customSet.set;
    let differenceSet = [];
    this.set.forEach(item => {
      if (otherSet.indexOf(item) === -1) {
        differenceSet.push(item);
      }
    });
    return new CustomSet(differenceSet);
  }

  union(customSet) {
    let otherSet = customSet.set;
    let combinedSet = otherSet.concat(this.set);
    let unionSet = [];
    combinedSet.forEach(item => {
      if (unionSet.indexOf(item) === -1) {
        unionSet.push(item);
      }
    });
    return new CustomSet(unionSet);
  }
}


module.exports = CustomSet;

// const actual = new CustomSet([1,2,3]).add(3);
// console.log(actual);