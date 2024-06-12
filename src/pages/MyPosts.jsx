import React, { useContext, useState } from "react";
import { FaComment, FaTrashAlt } from "react-icons/fa";
import useUserPosts from "./../hooks/useUserPosts";
import Loading from "./../components/Loading";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";

const MyPosts = () => {
  const { user } = useContext(AuthContext);
  const { userPosts, isLoading } = useUserPosts();
  const axiosFetch = useAxios();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [currentPage, setCurrentPage] = useState(1);

  // Getting user posts and sending query for pagination
  const { data: userPostsData } = useQuery({
    queryKey: ["userPosts", user?.email, currentPage],
    queryFn: async () => {
      const { data } = await axiosFetch(
        `/posts?email=${user?.email}&size=${5}&page=${currentPage}`
      );
      return data;
    },
  });

  const { mutateAsync } = useMutation({
    mutationFn: async (postId) => {
      const { data } = await axiosSecure.delete(`/post/${postId}`);
      return data;
    },

    onSuccess: () => {
      toast.success("Post deleted successfully");
      queryClient.invalidateQueries(["userPosts"]);
    },
  });

  const handleDelete = (postId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await mutateAsync(postId);
        Swal.fire({
          title: "Deleted!",
          text: "Your post has been deleted.",
          icon: "success",
        });
      }
    });
  };

  if (isLoading) return <Loading />;

  const totalPosts = userPosts?.length;
  const totalPages = Math.ceil(totalPosts / 5);
  const pages = [...Array(totalPages).keys()];

  return (
    <div>
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
              {userPostsData?.map((post) => (
                <tr
                  key={post._id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="flex items-center">
                      <span className="font-medium">{post.title}</span>
                    </div>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <span className="font-medium">{post.upvote_count}</span>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <span className="font-medium">{post.comments_count}</span>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <Link to={`/dashboard/comments/${post._id}`}>
                      <button className="mr-2 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-200">
                        <FaComment />
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(post._id)}
                      className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-700 transition duration-200"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-center mt-6">
            {
              <div className="flex space-x-2">
                {pages.map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page + 1)}
                    className={`${
                      currentPage === page + 1
                        ? "bg-lime-500 text-white"
                        : "bg-white text-gray-800"
                    } px-3 py-1 rounded-lg`}
                  >
                    {page + 1}
                  </button>
                ))}
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPosts;
