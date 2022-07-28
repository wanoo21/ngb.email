/*
 * Copyright (c) 2022.
 */

import { Rule, Tree } from "@angular-devkit/schematics";

// Just return the tree
export function ngAdd(): Rule {
  return (tree: Tree) => {
    // context.addTask(new NodePackageInstallTask());
    return tree;
  };
}
