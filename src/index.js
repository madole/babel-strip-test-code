const IDENTIFIER_NODE_NAME = '__test__';
const EXPORT_NAMED_DECLARATION = 'ExportNamedDeclaration';

function traverseBackUpToGetExportType(path) {
    if (path.parentPath && path.parentPath.parentPath && path.parentPath.parentPath.parent) {
        return path.parentPath.parentPath.parent.type;
    }

    return null;
}

const StripTestCodeVisitor = {
    Identifier(path) {
        if(path.node.name === IDENTIFIER_NODE_NAME) {
            console.log(path.parentPath.parentPath.parent.type)
            if(traverseBackUpToGetExportType(path) === EXPORT_NAMED_DECLARATION) {
                path.parentPath.remove();
            }
        }
    }
};

export default function({types: t }) {
  return {
    visitor: StripTestCodeVisitor
  };
}
