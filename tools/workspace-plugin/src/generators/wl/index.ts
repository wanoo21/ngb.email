import { formatFiles, Tree } from '@nrwl/devkit';
import { libraryGenerator } from '@nx/workspace/generators';
import { chain, externalSchematic } from '@angular-devkit/schematics';

export default async function (tree: Tree, schema: any) {
  await libraryGenerator(tree, { name: schema.name });
  await formatFiles(tree);
  return chain([externalSchematic('@schematics/angular', 'component', {})]);
  // return () => {
  //   installPackagesTask(tree);
  // };
}
