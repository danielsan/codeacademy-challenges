'use strict';

const {expect} = require('chai');

describe('flattenArray', () => {
  const {flattenArray} = require('../flatten-array-basic');

  context('when receiving a 2D array', () => {
    it('should return a 1D array with all the elements from the input', () => {
      const exp    = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      const input  = [1, [2, 3], 4, 5, [6, 7, 8], 9];
      const output = flattenArray(input);
      expect(output).to.deep.equal(exp);
    });
  });

  context('when receiving a multi dimentional array', () => {
    it('should return a 1D array with all the elements from 1st level of the input', () => {
      const exp    = [1, 2, 3, [4], 5, [6], 7, 8, 9];
      const input  = [1, [2, 3], [[4], 5], [[6], 7, 8], 9];
      const output = flattenArray(input);
      expect(output).to.deep.equal(exp);
    });
  });
});
