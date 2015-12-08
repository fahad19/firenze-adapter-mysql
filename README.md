# firenze-adapter-mysql

[![Build Status](https://secure.travis-ci.org/fahad19/firenze-adapter-mysql.png?branch=master)](http://travis-ci.org/fahad19/firenze-adapter-mysql) [![Coverage Status](https://coveralls.io/repos/fahad19/firenze-adapter-mysql/badge.svg?branch=master)](https://coveralls.io/r/fahad19/firenze-adapter-mysql?branch=master) [![npm](https://img.shields.io/npm/v/firenze-adapter-mysql.svg)](https://www.npmjs.com/package/firenze-adapter-mysql) [![Join the chat at https://gitter.im/fahad19/firenze](https://img.shields.io/badge/gitter-join_chat_%E2%86%92-1dce73.svg)](https://gitter.im/fahad19/firenze)

MySQL adapter for [firenze.js](https://github.com/fahad19/firenze)

Install it with npm:

```
$ npm install --save firenze-adapter-mysql
```

## Usage

```js
var f = require('firenze');
var Database = f.Database;
var MysqlAdapter = require('firenze-adapter-mysql');

var db = new Database({
  adapter: MysqlAdapter,
  host: '127.0.0.1',
  port: 3306,
  database: 'my_database',
  user: 'root',
  password: '',
  pool: {
    min: 0,
    max: 1
  }
});
```

## Testing

Tests are written with [mocha](http://mochajs.org/), and can be run via npm:

```
$ npm test
```

## License

MIT © [Fahad Ibnay Heylaal](http://fahad19.com)
