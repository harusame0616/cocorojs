const ValueSingle = require('./value-single');
const operationTable = {
  auto: '41',
  cooling: '42',
  heating: '43',
  dehumidification: '44',
};

class Operation extends ValueSingle {
  constructor(status) {
    super('B0', operationTable[status]);
  }
}

module.exports = Operation;
