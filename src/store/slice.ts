import { createSlice } from "@reduxjs/toolkit";
import { Node, Edge } from "@reactflow/core";

const initialState: {
  isCollapsed: boolean;
  isClicked: boolean;
  currentNode: string;
  initialNodes: Node[];
  initialEdges: Edge[];
} = {
  isCollapsed: true,
  isClicked: false,
  currentNode: "First",
  initialNodes: [
    {
      id: "1",
      data: { value: 123 },
      position: { x: 350, y: 350 },
      type: "First",
    },
  ],
  initialEdges: [{ id: "1-2", source: "1", target: "2" }],
};

export const mainSlice = createSlice({
  name: "manychatClone",
  initialState,
  reducers: {
    openNavbar: (state) => ({ ...state, isCollapsed: false }),
    closeNavbar: (state) => ({ ...state, isCollapsed: true }),
    setFirstNode: (state) => ({ ...state, currentNode: "First" }),
    setNextNode: (state) => ({ ...state, currentNode: "Next" }),
    setIsClickedTrue: (state) => ({ ...state, isClicked: true }),
    setIsClickedFalse: (state) => ({ ...state, isClicked: false }),
    addNewNode: (state, action) => ({
      ...state,
      initialNodes: state.initialNodes.concat(action.payload.newNode),
      initialEdges: state.initialEdges.concat(action.payload.newEdge),
    }),
    updateNodesAndEdges: (state, action) => ({
      ...state,
      initialNodes: action.payload.newNode,
      initialEdges: action.payload.newEdge,
    }),
  },
});

export const { reducer: mainReducer } = mainSlice;
