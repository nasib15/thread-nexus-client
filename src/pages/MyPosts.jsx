import React, { useState } from "react";
import { FaComment, FaTrashAlt } from "react-icons/fa";

const mockPosts = [
  { id: 1, title: "First Post", votes: 10, comments: 5 },
  { id: 2, title: "Second Post", votes: 20, comments: 8 },
  { id: 3, title: "Third Post", votes: 15, comments: 7 },
];

const MyPosts = () => {
  const [posts, setPosts] = useState(mockPosts);

  const handleDelete = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  return (
    <div className="lg:ml-[260px] mx-auto p-4">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">My Posts</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="w-full bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Post Title</th>
                <th className="py-3 px-6 text-center">Votes</th>
                <th className="py-3 px-6 text-center">Comments</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {posts.map((post) => (
                <tr
                  key={post.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="font-medium">{post.title}</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <span className="font-medium">{post.votes}</span>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <span className="font-medium">{post.comments}</span>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <button className="mr-2 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-200">
                      <FaComment />
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-700 transition duration-200"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
