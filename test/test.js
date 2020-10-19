const assert = require('assert');
const varsubst = require('..');
const fixtures = require('./fixtures');

for (const fixture of fixtures) {
    assert.strictEqual(
        varsubst(fixture.template, fixture.context),
        fixture.expected, 
        `Template: ${fixture.template}`
    )
}

console.log('All tests passed!')