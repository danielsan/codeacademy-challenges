function averageFinder(s) {
  const mean = s.reduce((a, b) => a + b) / s.length;
  const temp = {};

  // The numbers in the list will become unique keys in the hashTable temp
  // the values of each key will be the numbers of occurrences of each key
  s.forEach(n => temp[n]++ || (temp[n] = 1));
  // sorts a list of keys by their values in a descending order
  const modeList = Object.keys(temp).sort((a, b) => temp[b] - temp[a]);
  // The mode only exists if the top value is greater that the previous one
  const mode = modeList[0] > modeList[1] ? +modeList[0] : undefined;

  return [mean, mode];
}

// averageFinder([500, 450, 400, 400, 375, 350, 325, 300]); // [ 387.5, 400 ]

module.exports = {averageFinder};
