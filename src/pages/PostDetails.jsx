import React from "react";
import { Link } from "react-router-dom";

const post = {
  id: 1,
  title: "Exploring the Benefits of Dark Mode",
  date: "2024-06-01",
  author: {
    name: "John Doe",
    avatar: "https://via.placeholder.com/150", // Replace with actual URL
  },
  tags: ["Dark Mode", "UX"],
  commentsCount: 15,
  votesCount: 200,
  summary:
    "Dark mode is not just a trend; it's a useful feature that can reduce eye strain and save battery life. Click to learn more about its benefits.",
};

const PostDetails = () => {
  return (
    <div>
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
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
          </button>
          <div className="space-x-3">
            <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
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
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              Share
            </button>
            <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
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
              UpVote
            </button>
            <button className="text-gray-600 hover:text-gray-800 focus:outline-none">
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
              DownVote
            </button>
          </div>
        </div>
        <div className="flex items-center mb-8">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <p className="text-lg font-semibold text-gray-800">
              {post.author.name}
            </p>
            <p className="text-sm text-gray-600">
              {new Date(post.date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">{post.title}</h1>
        <p className="text-gray-700 mb-6">{post.summary}</p>
        <div className="flex flex-wrap mb-6">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="mr-2 mb-2 bg-blue-200 text-blue-800 text-xs font-medium px-3 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center mb-8">
          <button className="mr-4 text-gray-600 hover:text-gray-800 focus:outline-none">
            Comment ({post.commentsCount})
          </button>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2 text-gray-600 hover:text-gray-800"
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
            <span>{post.votesCount}</span>
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
          </div>
        </div>
        <div className="border-t pt-6">
          {/* Comment section can be added here */}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
