class Matrix {
  constructor(numString) {
    this.numString = numString;
    this.rows = this.getRows();
    // YOU NEED AN EXPLICIT RETURN VALUE FOR MAP IF YOU USE PARANTHESES
    // console.log(this.rows);
    // this.columns = new Array(this.rows[0].length);
    // this.columns.fill([]);

    this.columns = this.getColumns();
    
    this.saddlePoints = this.getSaddlePoints();

    
  }

  getRows() {
    return this.numString.split('\n').map(rowString => {
      return rowString.trim().split(' ').map(char => parseInt(char, 10));
    });
  }

  getColumns() {
    let columns = [];
    let repeatCount = this.rows[0].length;
    for (let idx = 0; idx < repeatCount; idx++) {
      columns.push([]);
    };
    this.rows.forEach(row => {
      row.forEach((value, idx) => {
        columns[idx].push(value);
      })
    });
    return columns;
  }

  getSaddlePoints() {
    let maxIndexesPerRow = [];
    for (let idx = 0; idx < this.rows.length; idx++) {
      maxIndexesPerRow.push([]);
    };
    this.rows.forEach((row, idx) => {
      let maxValue = Math.max.apply(null, row);
      row.forEach((value, valueIdx) => {
        if (value === maxValue) {
          maxIndexesPerRow[idx].push(valueIdx);
        }
      });
    });

    let saddlePoints = [];

    maxIndexesPerRow.forEach((row, rowIdx) => {
      row.forEach(maxIndex => { // maxIndex in that row, you want to check if the col min is equal to this corresponding number
        // maxIndex is the column reference
        let colMin = Math.min.apply(null, this.columns[maxIndex]);
        if (this.rows[rowIdx][maxIndex] === colMin) {
          saddlePoints.push([rowIdx, maxIndex]);
        };
        
      });
    });

    return saddlePoints;
  }
}

// TESTING

function columns(numString) {
  let rows = numString.split('\n').map(rowString => rowString.trim().split(' ').map(char => parseInt(char, 10)));
  let columns = [];
  // columns.fill([]); THIS WILL MAKE EACH ARRAY THE SAME!
  // columns = columns.map(column => []); EMPTY ITEMS DO NOT GET MAPPED!

  let repeatCount = rows[0].length;
  for (let idx = 0; idx < repeatCount; idx++) {
    columns.push([]);
  };
  console.log("Rows");
  console.log(rows);
  rows.forEach(row => {
    row.forEach((value, idx) => {
      // console.log(columns);


      console.log(idx, columns[idx]);
      columns[idx].push(value);
    })
  });

  let maxIndexesPerRow = [];
  for (let idx = 0; idx < rows.length; idx++) {
    maxIndexesPerRow.push([]);
  };
  rows.forEach((row, idx) => {
    let maxValue = Math.max.apply(null, row);
    row.forEach((value, valueIdx) => {
      if (value === maxValue) {
        maxIndexesPerRow[idx].push(valueIdx);
      }
    });
  });

  saddlePoints = [];

  maxIndexesPerRow.forEach((row, rowIdx) => {
    row.forEach(maxIndex => { // maxIndex in that row, you want to check if the col min is equal to this corresponding number
      // maxIndex is the column reference
      let colMin = Math.min.apply(null, columns[maxIndex]);
      if (rows[rowIdx][maxIndex] === colMin) {
        saddlePoints.push([rowIdx, maxIndex]);
      };
      
    });
  });

  // console.log(saddlePoints);

  // console.log(maxIndexesPerRow);
  return columns;
}

// console.log(columns('1 2 3\n4 5 6'));
// console.log(columns("1 2 3\n4 5 6\n7 8 9\n 8 7 6"));

module.exports = Matrix;