import React from "react";
import { FaCrown, FaMedal } from "react-icons/fa";
import useUser from "../hooks/useUser";
import Loading from "../components/Loading";
import useUserPosts from "../hooks/useUserPosts";

const UserProfile = () => {
  const { userData, isLoading } = useUser();
  const { userPosts } = useUserPosts();

  if (isLoading) return <Loading />;

  return (
    <div>
      <div>
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6">
            <div className="flex items-center">
              <img
                src={userData?.image}
                className="w-20 h-20 rounded-full border-4 border-white shadow-lg mr-4"
              />
              <div>
                <h1 className="text-2xl font-bold text-white">
                  {userData?.name}
                </h1>
                <p className="text-gray-200">{userData?.email}</p>
                <div className="mt-2">
                  {userData?.membership_status === "member" ? (
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
              {userPosts?.slice(0, 3).map((post) => (
                <div
                  key={post._id}
                  className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {post?.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-2">
                    {new Date(post?.time).toLocaleDateString("en-UK")}
                  </p>
                  <p className="text-gray-700">{post?.description}</p>
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
