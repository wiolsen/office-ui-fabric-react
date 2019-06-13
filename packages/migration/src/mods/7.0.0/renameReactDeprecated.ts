import { mod } from 'riceburn';
import ts from 'typescript';
import { migration, IMigrationOptions, ModResult } from '../../migration';

export default migration(
  'rename componentWillReceiveProps with UNSAFE_componentWillReceiveProps',
  (opts: IMigrationOptions): ModResult[] => {
    return mod('**/*.ts?(x)', opts).asTypescript((node, modder) => {
      const replacements = {
        componentWillMount: 'UNSAFE_componentWillMount',
        componentWillReceiveProps: 'UNSAFE_componentWillReceiveProps',
        componentWillUpdate: 'UNSAFE_componentWillUpdate'
      };

      if (ts.isClassDeclaration(node)) {
        for (const member of node.members) {
          if (member.name) {
            for (const from of Object.keys(replacements) as (keyof typeof replacements)[]) {
              if (member.name!.getText() === from) {
                return modder.replace(member.name!, replacements[from]);
              }
            }
          }
        }
      }
    }).files;
  }
);
