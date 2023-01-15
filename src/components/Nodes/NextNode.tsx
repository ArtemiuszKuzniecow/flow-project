import * as React from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { top: 90 };

const NextNode = () => {
  return (
    <>
      <Handle position={Position.Left} type={"target"} />
      <div className="border-2 border-gray-400 rounded-xl hover:border-blue-500 cursor-pointer active:border-green-500 w-[280px] h-[200px] p-4 bg-white flex flex-col">
        <h1 className="text-xl">Send message</h1>
      </div>
      <Handle position={Position.Right} type={"source"} style={handleStyle} />
    </>
  );
};

export default NextNode;
