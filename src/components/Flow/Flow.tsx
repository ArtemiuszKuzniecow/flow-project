/* eslint-disable react-hooks/rules-of-hooks */
import {
  Connection,
  Edge,
  EdgeChange,
  NodeChange,
  Node,
} from "@reactflow/core";
import * as React from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Controls,
} from "reactflow";
import "reactflow/dist/style.css";
import FirstNode from "../Nodes/FirstNode";
import NextNode from "../Nodes/NextNode";

type NodeData = {
  value: number;
};

type CustomNode = Node<NodeData>;

const nodeTypes = { First: FirstNode, Next: NextNode };

const initialNodes: Node[] = [
  {
    id: "1",
    data: { value: 123 },
    position: { x: 350, y: 350 },
    type: "First",
  },
  {
    id: "2",
    data: { value: 123 },
    position: { x: 750, y: 400 },
    type: "Next",
  },
  {
    id: "3",
    data: { value: 123 },
    position: { x: 1150, y: 450 },
    type: "Next",
  },
];

const initialEdges = [
  { id: "1-2", source: "1", target: "2" },
  { id: "2-3", source: "2", target: "3" },
];

const Flow = () => {
  const [nodes, setNodes] = React.useState(initialNodes);
  const [edges, setEdges] = React.useState(initialEdges);

  const onNodesChange = React.useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = React.useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = React.useCallback(
    (connection: Edge<any> | Connection) =>
      setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <div style={{ height: "100vh" }} className="ml-10 bg-[#f1f3f5] h-full">
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      >
        <Controls position="bottom-right" />
      </ReactFlow>
    </div>
  );
};

export default Flow;
