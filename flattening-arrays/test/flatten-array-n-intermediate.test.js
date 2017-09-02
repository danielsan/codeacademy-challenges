'use strict';

const {expect} = require('chai');

describe('flattenArrayN', () => {
  const {flattenArrayN} = require('../flatten-array-n-intermediate');

  context('when receiving a multi dimensional array', () => {
    it('should return a 1D array with all the single elements from the input', () => {
      const exp = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const res = flattenArrayN([1, 2, [3, [4, [5]]], 6, [7, [8, [9]]]]);
      expect(res).to.deep.equal(exp);
    });
  })
});