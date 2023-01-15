import { RootStore } from "./rootReducer";

export const getIsCollapsedSelector = () => (state: RootStore) =>
  state.main.isCollapsed;

export const getAllNodesSelector = () => (state: RootStore) =>
  state.main.initialNodes;

export const getAllEdgesSelector = () => (state: RootStore) =>
  state.main.initialEdges;

export const getCurrentNodeSelector = () => (state: RootStore) =>
  state.main.currentNode;

export const getIsClickedSelector = () => (state: RootStore) =>
  state.main.isClicked;
