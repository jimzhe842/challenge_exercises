function encode(string) {
  if (string === '') {
    return '';
  }
  let charArr = string.split('');
  let encodedString = '';
  let currentCount = 1;
  while (charArr.length > 0) {
    let current = charArr[0];
    let next = charArr[1];
    if (current === next) {
      currentCount++;
    } else {
      if (currentCount > 1) {
        encodedString += `${currentCount}${current}`;
      } else {
        encodedString += `${current}`;
      }
      currentCount = 1;
    }

    charArr.shift();
  }
  return encodedString;
}


function decode(string) {
  let decodedString = '';
  let charArr = string.split('');
  while (charArr.length > 0) {
    let current = charArr[0];
    let repeatCount = '';
    while (current >= '0' && current <= '9') { // everything is a string at this point;
      repeatCount += current;
      charArr.shift(); // shift once since you need to shift twice (again for the next letter);
      current = charArr[0];
    } 
    if (repeatCount !== '') {
      decodedString += current.repeat(Number(repeatCount));
    } else {
      decodedString += current;
    }
    charArr.shift();
  }

  return decodedString;
}


module.exports = {encode, decode};