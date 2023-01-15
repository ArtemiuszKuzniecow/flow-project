import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { CloseArrow, OpenArrow } from "../../assets/svg";
import {
  getAllEdgesSelector,
  getAllNodesSelector,
  getCurrentNodeSelector,
  getIsClickedSelector,
  getIsCollapsedSelector,
} from "../../store/selectors";
import { mainSlice } from "../../store/slice";

const Navbar = () => {
  const dispatch = useDispatch();
  const isCollapsed = useSelector(getIsCollapsedSelector());
  const currentNode = useSelector(getCurrentNodeSelector());
  const isClicked = useSelector(getIsClickedSelector());
  const allNodes = useSelector(getAllNodesSelector());
  const allEdges = useSelector(getAllEdgesSelector());

  const newNode = {
    id: `${Number(allNodes[allNodes.length - 1].id) + 1}`,
    data: { value: 123 },
    position: {
      x: allNodes[allNodes.length - 1].position.x + 350,
      y: allNodes[allNodes.length - 1].position.y,
    },
    type: "Next",
  };

  const newEdge = {
    id: `${Number(allNodes[allNodes.length - 1].id) + 1}-${
      Number(allNodes[allNodes.length - 1].id) + 2
    }`,
    source: `${Number(allNodes[allNodes.length - 1].id) + 1}`,
    target: `${Number(allNodes[allNodes.length - 1].id) + 2}`,
  };

  const newItem = { newNode, newEdge };

  return !isCollapsed ? (
    <>
      <div className="flex flex-row h-full fixed z-50 bg-white duration-500 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[400px]">
        <div className="w-full text-center">
          {isClicked &&
            (currentNode === "First" ? (
              <div className="py-4 bg-green-100 m-0 text-xl">Starting Step</div>
            ) : (
              <div className="py-4 bg-blue-100 m-0 text-xl">Send Message</div>
            ))}

          {isClicked ? (
            currentNode === "First" ? (
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
                <div
                  className="text-center ml-4 py-3 text-xl text-blue-600 border-dashed border-2 rounded-lg cursor-pointer"
                  onClick={() => {
                    dispatch(mainSlice.actions.addNewNode(newItem));
                    console.log(newItem);
                  }}
                  role="button"
                >
                  Choose Next Step
                </div>
              </div>
            ) : (
              <div>Choose Next Step</div>
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
            dispatch(mainSlice.actions.closeNavbar());
            dispatch(mainSlice.actions.setIsClickedFalse());
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
      onClick={() => dispatch(mainSlice.actions.openNavbar())}
    >
      <OpenArrow />
    </div>
  );
};

export default Navbar;
