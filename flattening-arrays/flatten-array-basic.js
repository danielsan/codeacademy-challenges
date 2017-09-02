/* eslint-disable no-confusing-arrow  */
const flattenArray = (i) => {
  const o = [];
  i.forEach(x => Array.isArray(x) ? o.push(...x) : o.push(x));
  return o;
};

module.exports = {flattenArray};
