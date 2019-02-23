export interface NodeData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  children: Array<NodeData>;
}

export interface UserNodeRelationData {
  nodeId: number;
  visited: boolean;
}

export interface SelectedNodeData {
  nodeId: number;
  title: string;
}

export class AppMode {
  static NORMAL = 'NORMAL';
  static SELECTOR = 'SELECTOR';
}
