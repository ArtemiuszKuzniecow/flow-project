/* eslint-disable react-hooks/rules-of-hooks */
import { Node } from "@reactflow/core";
import ReactFlow, { Controls } from "reactflow";
import "reactflow/dist/style.css";
import { shallow } from "zustand/shallow";
import useStore, { RFState } from "../../store/store";
import FirstNode from "../Nodes/FirstNode";
import NextNode from "../Nodes/NextNode";

type NodeData = {
  value: number;
};

type CustomNode = Node<NodeData>;

const nodeTypes = { First: FirstNode, Next: NextNode };

const selector = (state: RFState) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
});

const Flow = () => {
  const { nodes, edges, onNodesChange, onEdgesChange } = useStore(
    selector,
    shallow
  );

  return (
    <div style={{ height: "100vh" }} className="ml-10 bg-[#f1f3f5] h-full">
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
      >
        <Controls position="bottom-right" />
      </ReactFlow>
    </div>
  );
};

export default Flow;
