/* eslint-disable no-confusing-arrow  */
const flattenArrayN = (i, o = []) => i.forEach(x => Array.isArray(x) ? flattenArrayN(x, o) : o.push(x)) || o;

module.exports = {flattenArrayN};
