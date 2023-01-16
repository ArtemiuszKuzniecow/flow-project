import { Handle, NodeProps, Position } from "reactflow";
import useStore, { RFState } from "../../store/store";
import { shallow } from "zustand/shallow";

const selector = (state: RFState) => ({
  isCollapsed: state.isCollapsed,
  isClicked: state.isClicked,
  currentTypeOfNode: state.currentTypeOfNode,
  nodes: state.nodes,
  edges: state.edges,
  onCloseNavbar: state.onCloseNavbar,
  onOpenNavbar: state.onOpenNavbar,
  onClickedFalse: state.onClickedFalse,
  onNextNode: state.onNextNode,
  onClickedTrue: state.onClickedTrue,
  currentNode: state.currentNode,
});

const handleStyle = { top: 90 };

const NextNode = ({ id }: NodeProps) => {
  const { onOpenNavbar, onNextNode, onClickedTrue, currentNode } = useStore(
    selector,
    shallow
  );
  const handleChangeNodeInNavbar = () => {
    onOpenNavbar();
    onNextNode();
    onClickedTrue();
  };

  return (
    <div onClick={handleChangeNodeInNavbar}>
      <Handle position={Position.Left} type={"target"} />
      <div
        className={`border-2 ${
          currentNode()?.id === id ? "border-green-500" : "border-gray-400"
        } rounded-xl hover:border-blue-500 cursor-pointer active:border-green-500 w-[280px] h-[200px] p-4 bg-white flex flex-col`}
      >
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
