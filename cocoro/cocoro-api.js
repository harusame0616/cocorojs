const Axios = require('axios');

const axios = Axios.create({
  baseURL: 'https://hms.cloudlabs.sharp.co.jp/hems/pfApi/ta/',
  headers: {
    Host: 'hms.cloudlabs.sharp.co.jp',
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'User-Agent':
      'smartlink_v200i Mozilla/5.0 (iPad; CPU OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148',
  },
});

class CocoroAPI {
  _cookie = '';

  constructor(appSecretKey, termialAppIdKey) {
    this._appSecretKey = appSecretKey;
    this._terminalAppIdKey = termialAppIdKey;
  }

  async login() {
    const response = await axios.post(
      `setting/login/?appSecret=${this._appSecretKey}&serviceName=iClub`,
      {
        terminalAppId: `https://db.cloudlabs.sharp.co.jp/clpf/key/${this._terminalAppIdKey}`,
      },
      {
        headers: {
          cookie: this._cookie,
        },
      }
    );

    const setCookie = response?.headers?.['set-cookie']?.[0];
    if (!setCookie) {
      throw new Error();
    }

    this._cookie = setCookie.split(' ')[0];
  }

  async getBoxInfo() {
    const response = await axios.get(
      `setting/boxInfo/?appSecret=${this._appSecretKey}&mode=other`,
      {
        headers: {
          cookie: this._cookie,
        },
      }
    );
    return response.data.box;
  }

  async getDeviceProperty(boxInfo) {
    const { echonetNode, echonetObject } = boxInfo.echonetData[0];
    const url = `control/deviceProperty?boxId=${boxInfo.boxId}&appSecret=${this._appSecretKey}&echonetNode=${echonetNode}&echonetObject=${echonetObject}&status=true`;
    const response = await axios.get(url, {
      headers: {
        cookie: this._cookie,
      },
    });
    return response;
  }

  control(boxInfo, params) {
    const { deviceId, echonetNode, echonetObj } = boxInfo.echonetData[0];

    return axios.post(
      `control/deviceControl?boxId=${boxInfo.boxId}&appSecret=${this._appSecretKey}`,
      {
        controlList: [
          {
            deviceId,
            echonetNode,
            echonetObj,
            status: params.map((param) => param.toObj()),
          },
        ],
      },
      {
        headers: {
          cookie: this._cookie,
        },
      }
    );
  }
}

module.exports = CocoroAPI;
