import ts from 'typescript';
import { IMigrationOptions, migration, ModResult } from '../../migration';
import { mod } from 'riceburn';

const packageName = 'office-ui-fabric-react';
const importName = 'autobind';

export default migration(
  'warn autobind decorator removed',
  (opts: IMigrationOptions): ModResult[] => {
    return mod('**/*.ts?(x)', opts).asTypescript((node, modder) => {
      if (
        ts.isImportDeclaration(node) &&
        node.moduleSpecifier.getText().indexOf(packageName) >= 0 &&
        node.importClause &&
        node.importClause.namedBindings &&
        ts.isNamedImports(node.importClause.namedBindings)
      ) {
        const namedBindings = node.importClause.namedBindings;
        let foundAutobindImport = false;
        namedBindings.forEachChild(c => {
          if (c.getText() === importName) {
            foundAutobindImport = true;
          }
        });
        if (foundAutobindImport) {
          const sourceFile = node.getSourceFile();
          const sourceFileName = sourceFile.fileName;
          const lineAndCharacter = sourceFile.getLineAndCharacterOfPosition(node.getStart());
          opts.warn(
            `${sourceFileName}:${lineAndCharacter.line}:${
              lineAndCharacter.character
            } - autobind decorator (@autobind) no longer available; consider using lambdas instead.`
          );
        }
      }

      return undefined;
    }).files;
  }
);
