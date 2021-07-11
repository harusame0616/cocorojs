class CocoroStatus {
  _status;
  constructor(code, type, value) {
    this._status = {
      statusCode: code,
      [type]: {
        code: value,
      },
      valueType: type,
    };
  }

  toObj() {
    return this._status;
  }
}

module.exports = CocoroStatus;
