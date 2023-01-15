/* eslint-disable react-hooks/rules-of-hooks */
import {
  Connection,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
} from "@reactflow/core";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Controls,
} from "reactflow";
import "reactflow/dist/style.css";
import {
  getAllEdgesSelector,
  getAllNodesSelector,
} from "../../store/selectors";
import { mainSlice } from "../../store/slice";
import FirstNode from "../Nodes/FirstNode";
import NextNode from "../Nodes/NextNode";

type NodeData = {
  value: number;
};

type CustomNode = Node<NodeData>;

const nodeTypes = { First: FirstNode, Next: NextNode };

const Flow = () => {
  const dispatch = useDispatch();
  const initialNodes = useSelector(getAllNodesSelector());
  const initialEdges = useSelector(getAllEdgesSelector());
  const [nodes, setNodes] = React.useState(initialNodes);
  const [edges, setEdges] = React.useState(initialEdges);

  React.useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [initialNodes, initialEdges]);

  const onNodesChange = React.useCallback(
    (changes: NodeChange[]) => {
      setNodes((nds: Node<any>[]) => applyNodeChanges(changes, nds));
    },
    [setNodes]
  );
  const onEdgesChange = React.useCallback(
    (changes: EdgeChange[]) => {
      setEdges((eds) => applyEdgeChanges(changes, eds));
    },
    [setEdges]
  );
  const onConnect = React.useCallback(
    (connection: Edge<any> | Connection) => {
      setEdges((eds) => addEdge(connection, eds));
    },
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
