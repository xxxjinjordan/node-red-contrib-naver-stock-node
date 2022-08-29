# node-red-contrib-naver-stock-node

A <a href="http://nodered.org" target="_new">Node-RED</a> node to get stock information with ticker using <a href="https://finance.naver.com" target="_new">Naver Finance</a> API.

## Install

Run command below in the root directory of your Node-RED install

```bash
npm install node-red-contrib-naver-stock-node
```

## Usage

You'll get stock data in _msg.payload_ with 6 digits string code(ticker).

- ex) Samsung Electronics: 005930

### parameter example

```javascript
msg.payload = "005930";
```

### sample response

```json
{
  "marketSum": 349829257,
  "per": 8.89,
  "eps": 6593.0,
  "pbr": 1.25,
  "now": 58600,
  "diff": -1400,
  "rate": -2.33,
  "quant": 6223240,
  "amount": 365468,
  "high": 58900,
  "low": 58600,
  "risefall": 5
}
```

### sample flow

```
[
    {
        "id": "99c82ef3084a307d",
        "type": "tab",
        "label": "Flow 2",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "f3be75a9da6c490e",
        "type": "naver-stock-node",
        "z": "99c82ef3084a307d",
        "name": "",
        "x": 490,
        "y": 240,
        "wires": [
            [
                "5f084630aadceba0"
            ]
        ]
    },
    {
        "id": "b9e50cc3618f65c7",
        "type": "inject",
        "z": "99c82ef3084a307d",
        "name": "삼성전자",
        "props": [
            {
                "p": "payload"
            },
            {
                "p": "topic",
                "vt": "str"
            }
        ],
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "topic": "",
        "payload": "005930",
        "payloadType": "str",
        "x": 200,
        "y": 240,
        "wires": [
            [
                "f3be75a9da6c490e"
            ]
        ]
    },
    {
        "id": "5f084630aadceba0",
        "type": "debug",
        "z": "99c82ef3084a307d",
        "name": "debug 6",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "targetType": "msg",
        "statusVal": "",
        "statusType": "auto",
        "x": 760,
        "y": 240,
        "wires": []
    }
]
```
