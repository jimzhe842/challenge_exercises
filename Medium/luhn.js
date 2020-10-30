class Luhn {
  constructor(number) {
    this.number = number;
    this.isValid = null;
  }

  _validateLuhn() {
    let numberArr = this.number.split(' ').join('').split('').reverse();
    if (!numberArr.every(number => number >= '0' && number <= '9') || numberArr.length <= 1) {
      this.isValid = false;
    } else {
      let sum = 0;
      for (let idx = 0; idx < numberArr.length; idx++) {
        let number = Number(numberArr[idx]);
        if (idx % 2 === 1) {
          number *= 2;
          sum += (number >= 10 ? number - 9 : number);
        } else {
          sum += number;
        }
      }

      if (sum % 10 === 0) {
        this.isValid = true;
      } else {
        this.isValid = false;
      }
    }
  }

  valid() {
    if (this.isValid !== null) {
      return this.isValid;
    }
    this._validateLuhn();
    return this.isValid;
  }
}

module.exports = Luhn;