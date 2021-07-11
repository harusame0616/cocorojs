const CocoroStatus = require('./cocoro-status');

class ValueSingle extends CocoroStatus {
  constructor(statusCode, value) {
    super(statusCode, 'valueSingle', value);
  }
}

module.exports = ValueSingle;
