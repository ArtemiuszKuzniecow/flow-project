import {
  applyEdgeChanges,
  applyNodeChanges,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  OnEdgesChange,
  OnNodesChange,
} from "reactflow";
import { create } from "zustand";
import initialEdges from "./edges";
import initialNodes from "./nodes";

export type RFState = {
  isCollapsed: boolean;
  isClicked: boolean;
  currentTypeOfNode: string;
  nodes: Node[];
  edges: Edge[];
  onNodesChange: OnNodesChange;
  onEdgesChange: OnEdgesChange;
  currentNode: () => Node | undefined;
  onOpenNavbar: () => void;
  onCloseNavbar: () => void;
  onFirstNode: () => void;
  onNextNode: () => void;
  onClickedTrue: () => void;
  onClickedFalse: () => void;
  onNewNode: (newNode: Node, newEdge: Edge) => void;
};

const useStore = create<RFState>((set, get) => ({
  isCollapsed: true,
  isClicked: false,
  currentTypeOfNode: "First",
  nodes: initialNodes,
  edges: initialEdges,
  currentNode: () => get().nodes.find((n) => n?.selected),
  onNodesChange: (changes: NodeChange[]) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes: EdgeChange[]) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onOpenNavbar: () => {
    set({ isCollapsed: false });
  },
  onCloseNavbar: () => {
    set({ isCollapsed: true });
  },
  onFirstNode: () => {
    set({ currentTypeOfNode: "First" });
  },
  onNextNode: () => {
    set({ currentTypeOfNode: "Next" });
  },
  onClickedTrue: () => {
    set({ isClicked: true });
  },
  onClickedFalse: () => {
    set({ isClicked: false });
  },
  onNewNode: (newNode: Node, newEdge: Edge) => {
    set({
      nodes: get().nodes.concat(newNode),
      edges: get().edges.concat(newEdge),
    });
  },
}));

export default useStore;
