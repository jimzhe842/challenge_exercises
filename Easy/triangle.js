class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;

    [ this.ratio1, this.ratio2, this.ratio3 ] = [ side2 / side1, side3 / side2, side3 / side1 ];
    this.triangleKind;
    this.validTriangle;
  }

  _validSideLengths() {
    if (this.side1 <= 0 || this.side2 <= 0 || this.side3 <= 0) {
      this.validTriangle = false;
      return false;
    } else if (this.side1 + this.side2 <= this.side3 || this.side1 + this.side3 <= this.side2 || this.side2 + this.side3 <= this.side1) {
      this.validTriangle = false;
      return false;
    }
    return true;
  }

  _validateTriangle() {
    if (this.validTriangle === false || (!this._validSideLengths())) {
      throw "Invalid triangle";
    }
  }

  _getKind() {
    if (this.ratio1 === this.ratio2 && this.ratio1 === 1) {
      return "equilateral";
    } else if (this.ratio1 === 1 || this.ratio2 === 1 || this.ratio3 === 1) {
      return "isosceles";
    } else {
      return "scalene";
    }
  }
  
  kind() {
    this._validateTriangle();
    if (!this.triangleKind) {
      this.triangleKind = this._getKind();
    }
    return this.triangleKind;
  }
}

module.exports = Triangle;