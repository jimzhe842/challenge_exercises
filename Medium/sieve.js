function primes(n) {
  let array = [];
  for (let idx = 2; idx <= n; idx++) {
    array.push(idx);
  }
  let primes = [];
  while (array.length > 0) {
    let currentNumber = array.shift();
    let multiple = currentNumber;
    primes.push(currentNumber);
    while (currentNumber <= n) {
      let index = array.indexOf(currentNumber);
      // console.log(index);
      if (index > -1) {
        array.splice(index, 1);
      }
      currentNumber += multiple;
    }
  }

  return primes;
}

module.exports = primes;