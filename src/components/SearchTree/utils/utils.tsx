type treeType = {
  id: number;
  treeName: string;
};

export function getTree() {
  const testTree: treeType = {
    id: 1,
    treeName: 'testTree',
  };
  return testTree;
}
