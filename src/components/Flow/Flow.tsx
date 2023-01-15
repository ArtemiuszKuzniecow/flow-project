import { Connection, Edge, EdgeChange, NodeChange } from "@reactflow/core";
import * as React from "react";
import ReactFlow, {
  Background,
  Controls,
  applyEdgeChanges,
  applyNodeChanges,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";

const edges = [{ id: "1-2", source: "1", target: "2" }];

const initialNodes = [
  {
    id: "1",
    data: { label: "Hello" },
    position: { x: 0, y: 0 },
  },
  {
    id: "2",
    data: { label: "World" },
    position: { x: 100, y: 100 },
  },
];

const initialEdges = [{ id: "1-2", source: "1", target: "2" }];

const Flow = () => {
  const [nodes, setNodes] = React.useState(initialNodes);
  const [edges, setEdges] = React.useState(initialEdges);

  const onNodesChange = React.useCallback((changes: NodeChange[]) => {
    return setNodes((nds) => applyNodeChanges(changes, nds));
  }, []);
  const onEdgesChange = React.useCallback((changes: EdgeChange[]) => {
    return setEdges((eds) => applyEdgeChanges(changes, eds));
  }, []);

  const onConnect = React.useCallback((params: Edge<any> | Connection) => {
    return setEdges((eds) => addEdge(params, eds));
  }, []);
  return (
    <div style={{ height: 800 }} className="ml-10">
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Flow;
