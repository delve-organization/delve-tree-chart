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
