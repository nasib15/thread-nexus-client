/* eslint-disable react/prop-types */
import React from "react";
import { BiUpvote } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import useTags from "../hooks/useTags";

const SearchedPost = ({ posts }) => {
  const { tags } = useTags();
  if (JSON.stringify(posts) == JSON.stringify(tags)) return null;
  return (
    <div className="my-24">
      <div className="text-center space-y-4">
        <h2 className="text-3xl text-neutral-900 font-bold">Searched Post</h2>
        <p className="text-neutral-600">
          Here is the post you searched for. Click on the post to read more.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
        {posts?.map((post) => (
          <Link
            to={`/post-details/${post._id}`}
            key={post._id}
            className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-100 cursor-pointer transition transform hover:-translate-y-1 hover:shadow-xl flex flex-col"
          >
            <div className="flex items-center mb-4">
              <img
                className="size-10 rounded-full mr-4"
                src={post.author.image}
              />
              <div className="text-sm">
                <p className="text-gray-900 font-medium leading-none">
                  {post.author.name}
                </p>
                <p className="text-gray-600 mt-1">
                  {new Date(post.time).toLocaleDateString("en-UK")}
                </p>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              {post.title}
            </h3>
            <div className="flex flex-wrap mt-2 mb-4">
              {post?.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="bg-lime-200 text-lime-700 text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-gray-600 text-sm mb-4">{post.description}</p>
            <div className="flex items-end justify-between text-gray-500 text-sm flex-1">
              <div className="flex items-center">
                <BiUpvote />
                <span>{post.voteDifference}</span>
              </div>
              <div className="flex items-center">
                <FaRegComment />
                <span>{post.comments_count}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchedPost;
