const varsubst = require('..');

console.log(varsubst('hello $var', { var: 'world' }))
console.log(varsubst('inThe${var}OfText', { var: 'Middle' }))
console.log(varsubst('using ${var:-default}', {}))
console.log(varsubst('using ${none:-${other:-$var}} vars', {var: 'nested'}))
console.log(varsubst('${USER:-$USERNAME} is substituting env', process.env))


