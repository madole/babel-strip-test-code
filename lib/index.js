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

function traverseBackUpToGetExportType(path) {
    if (path.parentPath && path.parentPath.parentPath && path.parentPath.parentPath.parent) {
        return path.parentPath.parentPath.parent.type;
    }

    return null;
}

var StripTestCodeVisitor = {
    Identifier: function Identifier(path) {
        if (path.node.name === IDENTIFIER_NODE_NAME) {
            if (traverseBackUpToGetExportType(path) === EXPORT_NAMED_DECLARATION) {
                path.parentPath.remove();
            }
        }
    }
};