import * as React from "react";
import { useDispatch } from "react-redux";
import { Handle, Position } from "reactflow";
import { PlayIcon } from "../../assets/svg";
import { mainSlice } from "../../store/slice";

const handleStyle = { top: 90 };

const FirstNode = () => {
  const dispatch = useDispatch();
  const handleChangeNodeInNavbar = () => {
    dispatch(mainSlice.actions.openNavbar());
    dispatch(mainSlice.actions.setFirstNode());
    dispatch(mainSlice.actions.setIsClickedTrue());
  };
  return (
    <div onClick={handleChangeNodeInNavbar}>
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
    </div>
  );
};

export default FirstNode;
