
const createTimeKeeper = () => {
  const timeKeeperList = [500, 450, 400, 400, 375, 350, 325, 300];

  function timeKeeper(num) {
    timeKeeperList.push(num);

    const
      s    = timeKeeperList.map(n => n).sort(), // s as in sorted
      min  = s[0],                  // first element of a sorted list is the min
      max  = s[s.length - 1],       // last  element of a sorted list is the max
      mean = s.reduce((a, b) => a + b) / s.length, // sums all values and divides result by 2, mean

      // the module of odd numbers by 2 always returns 1, which is evaluated as true on the ternary
      // in that case, the median will be the middle element of the sorted list
      // the module of odd numbers by 2 is always 0, which is evaluated as false on the ternary
      // in that case it calculates the mean of the two middle elements
      median = s.length % 2 ? s[~~(s.length / 2)] : (s[s.length / 2 - 1] + s[s.length / 2]) / 2,
      temp = {};

    // The numbers in the list will become unique keys in the hashTable temp
    // the values of each key will be the numbers of occurrences of each key
    s.forEach(n => temp[n]++ || (temp[n] = 1));
    const
      // sorts a list of keys by their values in a descending order
      modeList = Object.keys(temp).sort((a, b) => temp[b] - temp[a]),
      // The mode only exists if the top value is greater that the previous one
      mode = modeList[0] > modeList[1] ? +modeList[0] : undefined;

    // declaring res outside just because I want to use a single line
    // arrow function for to map the array
    let res;

    const report = timeKeeperList
      // maps the array with the differences between the current value and the next
      // if the diference is not 0 it will return the negative value of that difference
      // that will show when the times are increasing or decreasing
      .map((v, i, list) => (res = v - list[i + 1]) && -res || res);

    // the last element of the  report is always NaN, hence the removal of it
    return [max, min, mean, mode, median, report.slice(0, report.length - 1)];
  }

  Object.defineProperty(timeKeeper, 'timeKeeperList', {
    get() { return [].concat(timeKeeperList); },
  });

  return timeKeeper;
};

// const timeKeeper = createTimeKeeper();
// timeKeeper(320); // [ 500, 300, 380, 400, 375, [ -50, -50, 0, -25, -25, -25, -25, 20 ] ]

module.exports = {createTimeKeeper};
