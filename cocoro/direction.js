const ValueBinary = require('./value-binary');
const directionTable = {
  auto: 0,
  up: 1,
  straight: 2,
  low: 3,
  lower: 4,
  lowest: 5,
  swing: 6,
};

class Direction extends ValueBinary {
  constructor(direction) {
    const base1 = 'c1';
    const base2 = '00';
    const point = directionTable[direction];
    const value = `${(parseInt(base1, 16) + point).toString(
      16
    )}0000000000c000000000000000000000000000000000000000000000000000000000000000000000000000000000000${(
      parseInt(base2, 16) + point
    ).toString(
      16
    )}01000000000000000000000000000000000000000000000000000000000000`;

    super('FA', value);
  }
}

module.exports = Direction;
