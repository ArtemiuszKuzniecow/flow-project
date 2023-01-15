import * as React from "react";
import { CloseArrow, OpenArrow } from "../../assets/avg";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(true);

  return !isCollapsed ? (
    <>
      <div className="flex flex-row h-full fixed z-50 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
        <p>Hi</p>
        <div
          onClick={() => setIsCollapsed(true)}
          className="flex flex-col h-full justify-center hover:bg-gray-200 duration-300 px-2 cursor-pointer ml-4"
        >
          <CloseArrow />
        </div>
      </div>
    </>
  ) : (
    <div
      className="flex flex-col h-full justify-center fixed hover:bg-gray-200 duration-300 px-2 cursor-pointer"
      onClick={() => setIsCollapsed(false)}
    >
      <OpenArrow />
    </div>
  );
};

export default Navbar;
