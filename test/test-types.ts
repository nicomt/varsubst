import varsubst = require('..');

// Test basic usage
const result1: string = varsubst('hello $var', { var: 'world' });

// Test with nested objects
const result2: string = varsubst('hello $var.field', { var: { field: 'world' } });

// Test with default values
const result3: string = varsubst('using ${var:-default}', {});

// Test with process.env
const result4: string = varsubst('${USER} is substituting env', process.env);

// Test with empty context
const result5: string = varsubst('hello', {});

console.log('TypeScript compilation successful!');
console.log('Sample results:');
console.log('  result1:', result1);
console.log('  result2:', result2);
console.log('  result3:', result3);
console.log('  result5:', result5);
