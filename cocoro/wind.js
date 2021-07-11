const ValueSingle = require('./value-single');

class Wind extends ValueSingle {
  constructor(status) {
    const table = {
      auto: '41',
      breeze: '33',
      light: '35',
      strong: '37',
      rapid: '38',
    };

    super('A0', table[status]);
  }
}

module.exports = Wind;
