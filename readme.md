# varsubst

> Simple library to substitute variables into strings

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install varsubst
```

## Usage

The API is simple

```js
const varsubst = require('varsubst')

varsubst('hello $var', { var: 'world' })              // hello world
varsubst('inThe${var}OfText', { var: 'Middle' })      // inTheMiddleOfText
varsubst('escaping $${var}', { var: 'noop' })         // escaping ${var}
varsubst('using ${var:-default}', {})                 // using default
varsubst('using ${none:-$var} vars', {var: 'nested'}) // using nested vars
varsubst('${USER} is substituting env', process.env)  // <user> is substituting env
```

