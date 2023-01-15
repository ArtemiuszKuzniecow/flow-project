import { RootStore } from "./rootReducer";

export const getIsCollapsedSelector = () => (state: RootStore) =>
  state.main.isCollapsed;
