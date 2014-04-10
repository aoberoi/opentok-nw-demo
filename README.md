# opentok-nw-demo

OpenTok Native Hello World application, built on [node-webkit](https://github.com/rogerwang/node-webkit).

## Building

Insert your own API Key, API Secret and Session ID in to `app/js/app.js`

```javascript
var apiKey = '',
    apiSecret = '',
    opentok = require('opentok')(apiKey, apiSecret),
    sessionId = '',
    token = opentok.generateToken(sessionId);
```

Make sure you have grunt installed.

```
$ npm install -g grunt-cli
```

Install node dependencies

```
$ npm install
```

Build

```
$ grunt
```

Now the binaries should be available inside the `webkitbuilds/releases/opentok-nw-demo` directory
