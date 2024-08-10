import React from "react";
import useTags from "../hooks/useTags";

const Tags = () => {
  const { tags } = useTags();
  return (
    <div className="my-24">
      <div className="text-center space-y-4">
        <h2 className="text-3xl text-neutral-900 font-bold">Explore Tags</h2>
        <p className="text-neutral-600">
          Browse through the tags below to discover posts related to your
          interests. Click on a tag to see all posts associated with it.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-10">
        {tags?.map((tag, index) => (
          <button
            key={index}
            className="bg-lime-200 text-lime-700 px-4 py-2 rounded-lg hover:bg-lime-300 focus:outline-none"
          >
            {tag?.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tags;
