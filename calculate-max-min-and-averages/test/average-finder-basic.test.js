'use strict';

const {expect} = require('chai');

describe('averageFinder', () => {
  const {averageFinder} = require('../average-finder-basic');

  context('when receiving an array of numbers', () => {
    it('should return an array with the mean and the mode in that order', () => {
      const exp    = [387.5, 400];
      const input  = [500, 450, 400, 400, 375, 350, 325, 300];
      const output = averageFinder(input);
      expect(output).to.deep.equal(exp);
    });
  });
});
