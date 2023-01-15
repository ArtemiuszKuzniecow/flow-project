import * as React from "react";
import { Handle, Position } from "reactflow";
import { PlayIcon } from "../../assets/svg";

const handleStyle = { top: 90 };

const FirstNode = () => {
  return (
    <>
      <div className="border-2 border-gray-400 rounded-xl hover:border-blue-500 cursor-pointer active:border-green-500 w-[280px] h-[200px] p-4 bg-white flex flex-col ">
        <div className="flex flex-row gap-5">
          <PlayIcon /> <h1 className="text-xl">Starting step</h1>
        </div>
        <div className="text-xl rounded-xl bg-green-100 border-2 p-2 my-2 text-center">
          Welcome message
        </div>
        <div className="text-xl border-2 border-dashed rounded-xl p-2 my-2 text-center">
          Add trigger
        </div>
      </div>
      <Handle position={Position.Right} type={"source"} style={handleStyle} />
    </>
  );
};

export default FirstNode;
