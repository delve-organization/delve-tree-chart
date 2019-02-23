import { Key } from '@ping/pi-iframe';
import { NodeData, UserNodeRelationData, AppMode, SelectedNodeData } from './delve-tree-chart-api.types';

export const APP_LOADED_KEY: Key<{}> = { key: 'APP_LOADED_KEY' };
export const NODE_DATA_INPUT_KEY: Key<NodeData> = { key: 'NODE_DATA_INPUT_KEY' };
export const USER_NODE_RELATION_DATA_INPUT_KEY: Key<UserNodeRelationData[]> = { key: 'USER_NODE_RELATION_DATA_INPUT_KEY' };
export const USER_NODE_RELATION_DATA_CHANGE_KEY: Key<UserNodeRelationData> = { key: 'USER_NODE_RELATION_DATA_CHANGE_KEY' };
export const SELECTED_NODE_DATA_KEY: Key<SelectedNodeData> = { key: 'SELECTED_NODE_DATA_KEY' };
export const APP_MODE_KEY: Key<AppMode> = { key: 'APP_MODE_KEY' };
