const CocoroStatus = require('./cocoro-status');

class ValueBinary extends CocoroStatus {
  constructor(statusCode, value) {
    super(statusCode, 'valueBinary', value);
  }
}

module.exports = ValueBinary;
