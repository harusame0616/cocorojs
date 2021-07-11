const ValueBinary = require('./value-binary');

class Temprature extends ValueBinary {
  constructor(temprature) {
    const point = (temprature - 18) * 2;
    const base1 = parseInt(44, 16);
    const base2 = parseInt(24, 16);

    const value = `${(base1 + point).toString(
      16
    )}00002000000000000000000000000000000000000000000000${(
      base2 + point
    ).toString(
      16
    )}0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`;

    super('FA', value);
  }
}

module.exports = Temprature;
