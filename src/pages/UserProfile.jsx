import React from "react";
import { FaCrown, FaMedal } from "react-icons/fa";

const user = {
  name: "John Doe",
  email: "john.doe@example.com",
  avatar:
    "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  isMember: true,
  recentPosts: [
    {
      id: 1,
      title: "How to Learn React",
      date: "2024-05-01",
      summary: "React is a powerful library for building user interfaces...",
    },
    {
      id: 2,
      title: "Understanding JavaScript Closures",
      date: "2024-05-03",
      summary: "Closures are an important concept in JavaScript...",
    },
    {
      id: 3,
      title: "CSS Grid vs. Flexbox",
      date: "2024-05-05",
      summary: "Both CSS Grid and Flexbox are powerful layout systems...",
    },
  ],
};

const UserProfile = () => {
  return (
    <div>
      <div className="lg:ml-[260px] mx-auto p-6">
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6">
            <div className="flex items-center">
              <img
                src={user.avatar}
                alt={`${user.name} avatar`}
                className="w-20 h-20 rounded-full border-4 border-white shadow-lg mr-4"
              />
              <div>
                <h1 className="text-2xl font-bold text-white">{user.name}</h1>
                <p className="text-gray-200">{user.email}</p>
                <div className="flex mt-2">
                  {user.isMember ? (
                    <div className="flex items-center text-yellow-400">
                      <FaCrown className="w-6 h-6" />
                      <span className="ml-2 text-white">Gold Member</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-yellow-500">
                      <FaMedal className="w-6 h-6" />
                      <span className="ml-2 text-white">Bronze Member</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
            <div className="space-y-4">
              {user.recentPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                  <p className="text-gray-700">{post.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
