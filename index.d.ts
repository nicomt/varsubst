/**
 * Substitute variables into a string template.
 * 
 * @param template - The template string containing variable placeholders (e.g., '$var', '${var}', '${var:-default}')
 * @param context - An object containing the variable values to substitute
 * @returns The template string with all variables substituted
 * 
 * @example
 * ```typescript
 * varsubst('hello $var', { var: 'world' })              // 'hello world'
 * varsubst('inThe${var}OfText', { var: 'Middle' })      // 'inTheMiddleOfText'
 * varsubst('escaping $${var}', { var: 'noop' })         // 'escaping ${var}'
 * varsubst('using ${var:-default}', {})                 // 'using default'
 * varsubst('using ${none:-$var} vars', {var: 'nested'}) // 'using nested vars'
 * varsubst('${USER} is substituting env', process.env)  // '<user> is substituting env'
 * ```
 */
declare function varsubst(template: string, context: Record<string, any>): string;

export = varsubst;
