import { shallow } from "zustand/shallow";
import { CloseArrow, OpenArrow } from "../../assets/svg";
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
  onNewNode: state.onNewNode,
  currentNode: state.currentNode,
});

const Navbar = () => {
  const {
    isCollapsed,
    isClicked,
    currentTypeOfNode,
    nodes,
    onCloseNavbar,
    onOpenNavbar,
    onClickedFalse,
    onNewNode,
    currentNode,
  } = useStore(selector, shallow);

  const selectedNode = currentNode();

  const newNode = {
    id: `${Number(nodes[nodes.length - 1].id) + 1}`,
    data: null,
    position: {
      x: nodes[nodes.length - 1]?.position?.x + 350,
      y: nodes[nodes.length - 1]?.position?.y,
    },
    type: "Next",
    selected: false,
  };

  const newEdge = {
    id: `${Number(nodes[nodes.length - 1].id) + 1}-${
      Number(nodes[nodes.length - 1].id) + 2
    }`,
    source: `${Number(nodes[nodes.length - 1].id) + 1}`,
    target: `${Number(nodes[nodes.length - 1].id) + 2}`,
  };

  return !isCollapsed ? (
    <>
      <div className="flex flex-row h-full fixed z-50 bg-white duration-500 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[400px]">
        <div className="w-full text-center">
          {isClicked &&
            (currentTypeOfNode === "First" ? (
              <div className="py-4 bg-green-100 m-0 text-xl">Starting Step</div>
            ) : (
              <div className="py-4 bg-blue-100 m-0 text-xl">Send Message</div>
            ))}

          {isClicked ? (
            currentTypeOfNode === "First" ? (
              <div>
                <div className="font-bold text-start ml-4 py-5 text-lg">
                  When this happens
                </div>
                <div className="text-center ml-4 py-1 text-xl text-blue-700 border-dashed border-2 rounded-lg cursor-pointer mb-5">
                  + Add triger
                </div>
                <hr />
                <div className="font-bold text-start ml-4 py-5 text-lg">
                  The First Step
                </div>
                {selectedNode &&
                  (nodes[nodes.length - 1]?.id === selectedNode?.id ? (
                    <div
                      className="text-center ml-4 py-3 text-xl text-blue-600 border-dashed border-2 rounded-lg cursor-pointer"
                      onClick={() => {
                        onNewNode(newNode, newEdge);
                      }}
                      role="button"
                    >
                      Choose Next Step
                    </div>
                  ) : (
                    <div className="text-center ml-4 py-3 text-xl bg-gray-200 border-dashed border-2 rounded-lg cursor-pointer">
                      Send message
                    </div>
                  ))}
              </div>
            ) : (
              <>
                <div className="flex flex-col border-2 border-dashed rounded-xl mt-5 py-5 justify-center mb-2">
                  <input
                    type="text"
                    id="field"
                    name="field"
                    className="border-2 mb-5 mx-2 rounded-lg h-10"
                  />
                  <label htmlFor="field" className="text-xl">
                    Add text
                  </label>
                  <div className="flex justify-center items-center my-2">
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded w-1/2  shadow">
                      Send
                    </button>
                  </div>
                </div>
                {selectedNode &&
                  (nodes[nodes.length - 1]?.id === selectedNode?.id ? (
                    <div
                      className="text-center ml-4 py-3 text-xl text-blue-600 border-dashed border-2 rounded-lg cursor-pointer"
                      onClick={() => {
                        onNewNode(newNode, newEdge);
                      }}
                      role="button"
                    >
                      Choose Next Step
                    </div>
                  ) : (
                    <div className="text-center ml-4 py-3 text-xl bg-gray-200 border-dashed border-2 rounded-lg cursor-pointer">
                      Send message
                    </div>
                  ))}
              </>
            )
          ) : (
            <p>
              Flow <br />
              Telegram Welcome Message
            </p>
          )}
        </div>

        <div
          onClick={() => {
            onCloseNavbar();
            onClickedFalse();
          }}
          className="flex flex-col h-full justify-center hover:bg-gray-200 duration-500 px-2 cursor-pointer"
        >
          <CloseArrow />
        </div>
      </div>
    </>
  ) : (
    <div
      className="flex flex-col h-full justify-center fixed bg-transparent hover:bg-gray-200 duration-500 px-2 cursor-pointer"
      onClick={() => onOpenNavbar()}
    >
      <OpenArrow />
    </div>
  );
};

export default Navbar;
