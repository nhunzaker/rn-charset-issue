# Fetch charset-utf8 bug

This repo reproduces an issue on React Native Android where `charset=utf-8` is appended to the `Content-Type` header whenever POSTing a body, like:

```javascript
let body = JSON.stringify({ key: "value" });

let headers = {
  "Content-Type": "application/json"
};

fetch("http://10.0.2.2:3000", { method: "POST", body, headers });
```

Logging the request on a server reports:

```
Content-Type: application/json; charset=utf-8
```

## Why

OkHTTP append charset to the header:
https://github.com/square/okhttp/issues/3081

## Setup this project

1. Clone this repo
2. `yarn install`
3. Start the metro bundler with `yarn start`
4. Start an emulator with `yarn react-native run-android`
5. Start a node server that logs headers with `node server.js`

This mini app includes buttons to post both JSON and form data. You should see `charset=utf-8` getting appended to the `Content-Type` header.
