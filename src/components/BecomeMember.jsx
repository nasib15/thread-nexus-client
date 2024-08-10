import React from "react";
import { useNavigate } from "react-router-dom";

const BecomeMember = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-full">
      <p className="mb-4 text-center text-lg">
        You have reached the maximum number of posts. Become a member to add
        more posts.
      </p>
      <button
        onClick={() => navigate("/membership")}
        className="px-4 py-2 text-neutral-800 bg-lime-400 rounded hover:bg-lime-500"
      >
        Become a Member
      </button>
    </div>
  );
};

export default BecomeMember;
