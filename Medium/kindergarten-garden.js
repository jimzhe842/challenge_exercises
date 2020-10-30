class Garden {
  static SEEDS = {
    V: 'violets',
    C: 'clover',
    R: 'radishes',
    G: 'grass'
  }

  constructor(diagram, students) {
    let gardenArr = diagram.split('\n');
    this.topRow = gardenArr[0];
    this.bottomRow = gardenArr[1];
    this.students = (students && students.sort()) || ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Fred', 'Ginny', 'Harriet', 'Ileana', 'Joseph', 'Kincaid', 'Larry'];
    this._assignPlant();
  }

  _lowerCaseFirstLetter(word) {
    let firstLetter = word[0];
    return firstLetter.toLowerCase() + word.slice(1);
  }
  
  _assignPlant() {
    for (let idx = 0; idx < this.topRow.length; idx += 2) {
      let SEEDS = Garden.SEEDS;
      let seedsArr = [SEEDS[this.topRow[idx]], SEEDS[this.topRow[idx + 1]], SEEDS[this.bottomRow[idx]], SEEDS[this.bottomRow[idx + 1]]];
      this[this._lowerCaseFirstLetter(this.students[ idx / 2])] = seedsArr;
    }
  }
}

module.exports = Garden;

