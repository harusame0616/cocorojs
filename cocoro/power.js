const ValueSingle = require('./value-single');

class Power extends ValueSingle {
  constructor(status) {
    const table = { on: '30', off: '31' };
    super('80', table[status]);
  }
}

module.exports = Power;
