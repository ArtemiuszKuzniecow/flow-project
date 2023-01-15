import * as React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import { CloseArrow, OpenArrow } from "../../assets/avg";
import { getIsCollapsedSelector } from "../../store/selectors";
import { mainSlice } from "../../store/slice";

const Navbar = () => {
  const dispatch = useDispatch();
  const isCollapsed = useSelector(getIsCollapsedSelector());

  return !isCollapsed ? (
    <>
      <div className="flex flex-row h-full fixed z-50 bg-white duration-500 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-[400px]">
        <div className="w-full text-center">
          Flow <br /> Telegram Welcome Message
        </div>
        <div
          onClick={() => dispatch(mainSlice.actions.closeNavbar())}
          className="flex flex-col h-full justify-center hover:bg-gray-200 duration-500 px-2 cursor-pointer ml-4"
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
