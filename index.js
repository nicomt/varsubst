const { parser } = require('./varsubst');

module.exports = function varsubst(template, context) {
    parser.yy.context = context
    return parser.parse(template);
}
