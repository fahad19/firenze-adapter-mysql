# firenze-adapter-mysql

[![Build Status](https://secure.travis-ci.org/fahad19/firenze-adapter-mysql.png?branch=master)](http://travis-ci.org/fahad19/firenze-adapter-mysql) [![Coverage Status](https://coveralls.io/repos/fahad19/firenze-adapter-mysql/badge.svg?branch=master)](https://coveralls.io/r/fahad19/firenze-adapter-mysql?branch=master) [![npm](https://img.shields.io/npm/v/firenze-adapter-mysql.svg)](https://www.npmjs.com/package/firenze-adapter-mysql) [![Join the chat at https://gitter.im/fahad19/firenze](https://img.shields.io/badge/gitter-join_chat_%E2%86%92-1dce73.svg)](https://gitter.im/fahad19/firenze)

MySQL adapter for [firenze.js](https://github.com/fahad19/firenze)

Install it with npm:

```
$ npm install --save firenze-adapter-mysql
```

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
# Contents

  - [Install](#install)
  - [Usage](#usage)
  - [Schema](#schema)
  - [Finders](#finders)
    - [first](#first)
    - [all](#all)
    - [list](#list)
    - [count](#count)
  - [Complex conditions](#complex-conditions)
    - [equals](#equals)
    - [in list](#in-list)
    - [comparisons](#comparisons)
    - [AND](#and)
    - [OR](#or)
    - [NOT](#not)
  - [Order](#order)
  - [Group](#group)
  - [Fields](#fields)
  - [Limit (pagination)](#limit-pagination)
- [Testing](#testing)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

<!--docume:src/index.js-->
## Install

```
$ npm install --save firenze-adapter-mysql
```

## Usage

You aren't expected to deal with the Adapter directly. Just pass the adapter to Database config when you create an instance.

```js
var f = require('firenze');
var Database = f.Database;
var MysqlAdapter = require('firenze-adapter-mysql');

var db = new Database({
  adapter: MysqlAdapter,
  host: '127.0.0.1',
  port: 3306,
  database: 'my_database',
  user: '',
  password: '',
  pool: {
    min: 0,
    max: 1
  }
});
```

## Schema

When defining a Collection's schema, you need to pass option for each column's `type`.

Here are the supported types from this adapter:

* increments
* integer
* bigInteger
* text
* string
* float
* decimal
* boolean
* date
* dateTime
* time
* enum
* binary
* uuid

Example:

```js
var Posts = db.createCollectionClass({
  schema: {
    id: {
      type: 'increments'
    }
  }
});
```

## Finders

Examples below assumes you have an instance of Collection already:

```js
var posts = new Posts();
```

### first

Gives you the first matched result:

```js
posts.find('first', {
  conditions: {
    id: 1
  }
}).then(function (post) {
  // post is now an instance of Post model
  var title = post.get('title');
});
```

### all

Gives you all matched results:

```js
posts.find('all', {
  conditions: {
    published: true
  }
}).then(function (models) {
  models.forEach(function (model) {
    var title = model.get('title');
  });
});
```
### list

Gives you a list of key/value paired object of matched results:

```js
posts.find('list', {
  conditions: {},
  fields: [
    'id',
    'title'
  ]
}).then(function (list) {
  // list is now:
  //
  // {
  //   1: 'Hello World',
  //   2: 'About'
  // }
});
```

### count

Gives you the total count of matched results:

```js
posts.find('count').then(function (count) {
  // count is an integer here
});
```

## Complex conditions

### equals

```js
posts.find('all', {
  conditions: {
    id: 1
  }
});
```

### in list

```js
posts.find('all', {
  conditions: {
    id: [
      1,
      2,
      3
    ]
  }
});
```

### comparisons

```js
posts.find('all', {
  conditions: {
    'Post.rating >': 3
  }
})
```

Example comparisons that you can try:

* greater than `ModelAlias.field >`
* greater than or equel to `ModelAlias.field >=`
* less than `ModelAlias.field <`
* less than or equal to `ModelAlias.field <=`
* not equal to `ModelAlias.field !=`

### AND

```js
posts.find('all', {
  conditions: {
    AND: {
      'Post.published': 1
    }
  }
});
```

### OR

```js
posts.find('all', {
  conditions: {
    OR: {
      'Post.published': 1
    }
  }
});
```

### NOT

```js
posts.find('all', {
  conditions: {
    NOT: {
      'Post.published': 1
    }
  }
});
```

## Order

For ordering results:

```js
posts.find('all', {
  order: {
    'Post.title': 'asc'
  }
});
```

## Group

For grouping result set:

```js
posts.find('all', {
  group: [
    'column_name'
  ]
});
```

## Fields

Select only a number of fields:

```js
posts.find('all', {
  fields: [
    'id',
    'title'
  ]
});
```

## Limit (pagination)

Limit number of results:

```js
posts.find('all', {
  limit: 10
});
```

If you want to go through paginated results:

```js
posts.find('all', {
  limit: 10,
  page: 2
})
```

<!--/docume:src/index.js-->

# Testing

Tests are written with [mocha](http://mochajs.org/), and can be run via npm:

```
$ npm test
```

# License

MIT © [Fahad Ibnay Heylaal](http://fahad19.com)
