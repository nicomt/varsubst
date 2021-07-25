
const basicTests = [
  {
    template: '',
    expected: '',
    context: {}
  },
  {
    template: 'hello',
    expected: 'hello',
    context: {}
  },
  {
    template: '$hello',
    expected: 'world',
    context: { hello: 'world' }
  },
  {
    template: '${hello}',
    expected: 'world',
    context: { hello: 'world' }
  },
  {
    template: 'hello $hello',
    expected: 'hello world',
    context: { hello: 'world' }
  },
  {
    template: 'hello ${hello}',
    expected: 'hello world',
    context: { hello: 'world' }
  },
  {
    template: 'hello $hello.world',
    expected: 'hello earth',
    context: { hello: { 'world': 'earth' } }
  },
  {
    template: 'hello ${hello.world}',
    expected: 'hello earth',
    context: { hello: { 'world': 'earth' } }
  },
  {
    template: 'hello $${hello}',
    expected: 'hello ${hello}',
    context: { hello: 'world' }
  },
  {
    template: 'hello $$hello',
    expected: 'hello $hello',
    context: { hello: 'world' }
  },
  {
    template: 'hello $hello$hello',
    expected: 'hello worldworld',
    context: { hello: 'world' }
  },
  {
    template: '$ENV{HOME}',
    expected: '{HOME}',
    context: {}
  },
  {
    template: '${ENV}{HOME}',
    expected: '{HOME}',
    context: {}
  },
  {
    template: '$${{HOME}}',
    expected: '${{HOME}}',
    context: {}

  },
  {
    template: '{',
    expected: '{',
    context: {}
  },
  {
    template: '}',
    expected: '}',
    context: {}
  },
  {
    template: '{}',
    expected: '{}',
    context: {}
  },
  {
    template: ':-',
    expected: ':-',
    context: {}
  },
  {
    template: '$$',
    expected: '$',
    context: {}
  },
  {
    template: 'hello{world',
    expected: 'hello{world',
    context: {}
  },
  {
    template: 'hello}world',
    expected: 'hello}world',
    context: {}
  },
  {
    template: 'hello:-world',
    expected: 'hello:-world',
    context: {}
  },
  {
    template: 'hello$world',
    expected: 'hello',
    context: {}
  },
  {
    template: '${hello:-world}',
    expected: 'world',
    context: {}
  }
]

const varObjectFields = [
  {
    template: 'hello $var.field',
    expected: 'hello world',
    context: { var: { field: 'world' } }
  },
  {
    template: 'hello ${var.field}',
    expected: 'hello world',
    context: { var: { field: 'world' } }
  },
  {
    template: 'hello $hello.world.other',
    expected: 'hello earth',
    context: { hello: { world: { other: 'earth' } } }
  },
  {
    template: 'hello ${hello.world.other}',
    expected: 'hello earth',
    context: { hello: { world: { other: 'earth' } } }
  },
  {
    template: 'hello ${hello.world.other}',
    expected: 'hello ',
    context: { hello: { world: {} } }
  },
  {
    template: 'hello ${hello.world.other}',
    expected: 'hello ',
    context: { hello: { world: 1 } }
  },
  {
    template: 'hello ${hello.world.other}',
    expected: 'hello ',
    context: { hello: { world: null } }
  },
]

const varDefault = [
  {
    template: '${hello:-world}',
    expected: 'other',
    context: { hello: 'other' }
  },
  {
    template: '${hello:-\'world\'}',
    expected: '\'world\'',
    context: {}
  },
  {
    template: '${hello:-"world"}',
    expected: '"world"',
    context: {}
  },
  {
    template: '${hello:-$world}',
    expected: 'other',
    context: { world: 'other' }
  },
  {
    template: '${hello:-$$}',
    expected: '$',
    context: {}
  },
  {
    template: '${hello:-$$world}',
    expected: '$world',
    context: { world: 'other' }
  },
  {
    template: '${hello:-$world.other}',
    expected: 'earth',
    context: { world: { other: 'earth' } }
  },
  {
    template: '${hello:-${world.other}}',
    expected: 'earth',
    context: { world: { other: 'earth' } }
  },
  {
    template: '${hello:-$empty}',
    expected: '',
    context: {}
  },
  {
    template: '${hello:-${empty:-nested}}',
    expected: 'nested',
    context: {}
  }
]


module.exports = basicTests
  .concat(varObjectFields)
  .concat(varDefault);