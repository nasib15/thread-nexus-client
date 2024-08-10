import React from "react";
import { ScaleLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-[50vh]">
      <ScaleLoader color="#a3e635" size={90} />
    </div>
  );
};

export default Loading;
