import * as React from "react";
import { useDispatch } from "react-redux";
import { Handle, Position } from "reactflow";
import { mainSlice } from "../../store/slice";

const handleStyle = { top: 90 };

const NextNode = () => {
  const dispatch = useDispatch();
  const handleChangeNodeInNavbar = () => {
    dispatch(mainSlice.actions.openNavbar());
    dispatch(mainSlice.actions.setNextNode());
    dispatch(mainSlice.actions.setIsClickedTrue());
  };
  return (
    <div onClick={handleChangeNodeInNavbar}>
      <Handle position={Position.Left} type={"target"} />
      <div className="border-2 border-gray-400 rounded-xl hover:border-blue-500 cursor-pointer active:border-green-500 w-[280px] h-[200px] p-4 bg-white flex flex-col">
        <h1 className="text-xl">Send message</h1>

        <div className="text-xl border-2 border-dashed rounded-xl p-4 my-8 text-center">
          Add a text
        </div>
      </div>
      <Handle position={Position.Right} type={"source"} style={handleStyle} />
    </div>
  );
};

export default NextNode;
