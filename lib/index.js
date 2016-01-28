const IDENTIFIER_NODE_NAME = '__test__';
const EXPORT_NAMED_DECLARATION = 'ExportNamedDeclaration';

const StripTestCodeVisitor = {
    Identifier(path) {
        if (path.node.name === IDENTIFIER_NODE_NAME) {
            if (path.parentPath.parentPath.parent.type === EXPORT_NAMED_DECLARATION) {
                path.parentPath.remove();
            }
        }
    }
};

export default function ({ types: t }) {
    return {
        visitor: StripTestCodeVisitor
    };
}