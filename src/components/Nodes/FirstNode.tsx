import { Handle, NodeProps, Position } from "reactflow";
import { shallow } from "zustand/shallow";
import { PlayIcon } from "../../assets/svg";
import useStore, { RFState } from "../../store/store";

const selector = (state: RFState) => ({
  isCollapsed: state.isCollapsed,
  isClicked: state.isClicked,
  currentTypeOfNode: state.currentTypeOfNode,
  nodes: state.nodes,
  edges: state.edges,
  onCloseNavbar: state.onCloseNavbar,
  onOpenNavbar: state.onOpenNavbar,
  onClickedFalse: state.onClickedFalse,
  onFirstNode: state.onFirstNode,
  onClickedTrue: state.onClickedTrue,
  currentNode: state.currentNode,
});

const handleStyle = { top: 90 };

const FirstNode = ({ id }: NodeProps) => {
  const { onOpenNavbar, onFirstNode, onClickedTrue, currentNode } = useStore(
    selector,
    shallow
  );
  const handleChangeNodeInNavbar = () => {
    onOpenNavbar();
    onFirstNode();
    onClickedTrue();
  };

  return (
    <div onClick={handleChangeNodeInNavbar}>
      <div
        className={`border-2 ${
          currentNode()?.id === id ? "border-green-500" : "border-gray-400"
        } rounded-xl hover:border-blue-500 cursor-pointer active:border-green-500 w-[280px] h-[200px] p-4 bg-white flex flex-col`}
      >
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
