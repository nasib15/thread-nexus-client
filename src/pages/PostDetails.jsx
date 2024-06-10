import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import Loading from "./../components/Loading";
import { FaRegShareFromSquare } from "react-icons/fa6";
import CommentSection from "../components/CommentSection";
import useCommentsPost from "../hooks/useCommentsPost";
import toast from "react-hot-toast";

const PostDetails = () => {
  const axiosFetch = useAxios();
  const { id } = useParams();
  const { comments } = useCommentsPost(id);
  const {
    data: post,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      const { data } = await axiosFetch(`/post/${id}`);
      return data;
    },
  });

  if (isLoading) return <Loading />;
  if (isError) {
    console.error(error.message);
  }

  const {
    title,
    description,
    tags,
    time,
    upvote_count,
    downvote_count,
    author,
  } = post;

  const handleClick = async (button) => {
    if (button === "upvote") {
      const { data } = await axiosFetch.patch(`/post/${id}?upvote=${"true"}`);
      if (data.modifiedCount > 0) {
        toast.success("Upvoted successfully");
        refetch();
        return;
      }
    }
    if (button === "downvote") {
      const { data } = await axiosFetch.patch(`/post/${id}?downvote=${"true"}`);
      if (data.modifiedCount > 0) {
        toast.success("Downvoted successfully");
        refetch();
        return;
      }
    }
  };

  return (
    <div>
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <Link
            to={"/"}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </Link>
          <div className="space-x-3 flex items-center">
            <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
              <div className="flex items-center gap-1">
                <FaRegShareFromSquare />
                Share
              </div>
            </button>
            <button
              onClick={() => handleClick("upvote")}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 15l7-7 7 7"
                />
              </svg>
              UpVote
            </button>
            <button
              onClick={() => handleClick("downvote")}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline-block"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              DownVote
            </button>
          </div>
        </div>
        <div className="flex items-center mb-8">
          <img
            src={author?.image}
            alt={author?.name}
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <p className="text-lg font-semibold text-gray-800">{author.name}</p>
            <p className="text-sm text-gray-600">
              {new Date(time).toLocaleDateString("en-UK")}
            </p>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">{title}</h1>
        <p className="text-gray-700 mb-6">{description}</p>
        <div className="flex flex-wrap mb-6">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="mr-2 mb-2 bg-lime-200 text-lime-700 text-xs font-medium px-3 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center mb-8">
          <button className="mr-4 text-gray-600 hover:text-gray-800 focus:outline-none">
            Comment ({comments?.length || 0})
          </button>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600 hover:text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              />
            </svg>
            <span className="mr-4">{upvote_count}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2 text-gray-600 hover:text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <span>{downvote_count}</span>
          </div>
        </div>
        <CommentSection title={title} />
      </div>
    </div>
  );
};

export default PostDetails;
