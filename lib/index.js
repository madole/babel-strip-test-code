'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (_ref) {
    var t = _ref.types;

    return {
        visitor: StripTestCodeVisitor
    };
};

var IDENTIFIER_NODE_NAME = '__test__';
var EXPORT_NAMED_DECLARATION = 'ExportNamedDeclaration';

var StripTestCodeVisitor = {
    Identifier: function Identifier(path) {
        if (path.node.name === IDENTIFIER_NODE_NAME) {
            if (path.parentPath.parentPath.parent.type === EXPORT_NAMED_DECLARATION) {
                path.parentPath.remove();
            }
        }
    }
};