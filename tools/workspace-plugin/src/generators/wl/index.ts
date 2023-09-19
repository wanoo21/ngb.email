import { formatFiles, Tree } from '@nx/devkit';
import { npmPackageGenerator } from '@nx/workspace/generators';
import { chain, externalSchematic } from '@angular-devkit/schematics';

export default async function (tree: Tree, schema: any) {
  await npmPackageGenerator(tree, { name: schema.name });
  await formatFiles(tree);
  return chain([externalSchematic('@schematics/angular', 'component', {})]);
  // return () => {
  //   installPackagesTask(tree);
  // };
}
