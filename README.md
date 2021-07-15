# cocorojs

This is `Cocoro Air` API wrapper library.

---

## Description

Cocoro Air is cloud service that operates IoT home appliance product of Sharp.  
Cocoro Air's API is private, but we can use API if the conditions are met.

Cocoro JS helps your api calling.

\***\* Waraning \*\***  
Such use is not expected by the official.  
Please use all at your own risk.

---

## Requirement

You have to signin and register device with Cocoro Air APP.  
CocoroJS require **APP-SECRET** and **TERMINAL-APP-ID-KEY**.
** Please be careful not to leak **

You have to get them using [mitm proxy](https://mitmproxy.org/).

1. Find the request below.
2. Check your APP-SECRET in it.

```
POST
https://hms.cloudlabs.sharp.co.jp/hems/pfApi/ta/setting/login/?appSecret=APP-SECRET&serviceName=iClub
```

3. Eenter it request show the json of request body.
4. Check your TERMINAL-APP-ID-KEY.

```json
{
  "terminalAppId": "https://db.cloudlabs.sharp.co.jp/clpf/key/TERMINAL-APP-ID-KEY"
}
```

---

## Usage

```js
const cocoro = require('cocorojs');
const api = new cocoro.CocoroAPI('APP-SECRET', 'TERMINAL-APP-ID-KEY');

// needs login to use API
// expires in a certain amount of time
await api.login();

// gets your registered device info
const boxes = await api.getBoxInfo();

// gets device detail
const propery = await api.getProperty(boxes[0]);

// controls your device
await api.control(boxes[0], [
    new Power('on'), // you will choice on/off
    new Operation('cooling'), // you will choice auto/cooling/heating/dehumidification
    new Wind('breeze') // you will choice auto/breeze/light/strong/rapid
    new Direction('low') // you will choice auto/up/straight/low/lower/lowest/swing
    ]);
```

---

## Install

```shell
npm i cocorojs
```

---

## Licence

[MIT](https://github.com/tcnksm/tool/blob/master/LICENCE)

## Author

[Masaharu **Nemoto**](https://github.com/harusame0616)
