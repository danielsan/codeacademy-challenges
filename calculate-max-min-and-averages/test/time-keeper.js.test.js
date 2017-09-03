'use strict';

const {expect} = require('chai');

describe('timeKeeper', () => {
  const {createTimeKeeper} = require('../time-keeper.js');

  it('should have the expected initial list', () => {
    const timeKeeper = createTimeKeeper();
    const expBefore  = [500, 450, 400, 400, 375, 350, 325, 300];
    const expAfter   = [500, 450, 400, 400, 375, 350, 325, 300, 320];
    expect(timeKeeper.timeKeeperList).to.deep.equal(expBefore);
    timeKeeper(320);
    expect(timeKeeper.timeKeeperList).to.deep.equal(expAfter);
  });

  context('when receiving a multi dimensional array', () => {
    it('should return a 1D array with all the single elements from the input', () => {
      const timeKeeper = createTimeKeeper();
      const
        longest  = 500,
        shortest = 300,
        mean     = 380,
        mode     = 400,
        median   = 375,
        timeDiff = [-50, -50, 0, -25, -25, -25, -25, 20];

      const exp = [longest, shortest, mean, mode, median, timeDiff];
      const res = timeKeeper(320);
      expect(res).to.deep.equal(exp);
    });
  });
});
