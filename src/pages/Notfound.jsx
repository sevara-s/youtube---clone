import React from "react";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const nav = useNavigate();
  return (
    <>
      <div className="not_found bg-black h-[100vh] w-[100%] flex items-center justify-center">
        <div className="not_found flex items-center flex-col gap-[20px]">
          <h1 className="text-white font-bold">404</h1>
          <h1 className="text-white font-bold">Not Found</h1>
          <button
            onClick={() => nav("/")}
            className="bg-red-900 hover:bg-red-500 text-white p-[10px]"
          >
            Main page
          </button>
        </div>
      </div>
    </>
  );
};
export default Notfound;
