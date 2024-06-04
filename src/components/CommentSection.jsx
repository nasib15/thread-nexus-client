import React from "react";

const CommentSection = () => {
  const handleSubmitComment = (e) => {
    e.preventDefault();
    console.log("Comment submitted");
  };

  return (
    <div>
      <div className="border-t border-gray-200 pt-4">
        <h3 className="text-2xl font-semibold mb-4">Comments</h3>

        <form onSubmit={handleSubmitComment} className="mb-6">
          <textarea
            className="w-full h-24 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
            placeholder="Write a comment..."
          ></textarea>
          <button
            type="submit"
            className="mt-4 px-4 py-2 bg-lime-400 text-neutral-800 font-medium rounded-md hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2"
          >
            Post Comment
          </button>
        </form>

        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <img
                className="size-10 rounded-full"
                src="https://via.placeholder.com/40"
              />
            </div>
            <div>
              <div className="text-lg font-semibold">User Name</div>
              <div className="text-gray-700">This is a comment.</div>
              <div className="text-sm text-gray-500 mt-1">2 hours ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
