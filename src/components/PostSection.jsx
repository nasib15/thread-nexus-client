import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BiUpvote } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxios from "../hooks/useAxios";

const PostSection = () => {
  const axiosFetch = useAxios();
  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await axiosFetch("/posts");
      return data;
    },
  });
  // const [currentPage, setCurrentPage] = useState(1);
  // const postsPerPage = 5;

  // // Calculate indexes for slicing posts array based on current page
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="my-24">
      <div className="text-center space-y-4">
        <h2 className="text-3xl text-neutral-900 font-bold">Latest Posts</h2>
        <p className="text-neutral-600">
          Browse through our latest posts and updates. Click on a post to read
          more.
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
              {post.tags.map((tag, index) => (
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
                <span>{post.upvote_count}</span>
              </div>
              <div className="flex items-center">
                <FaRegComment />
                <span>{post.comments_count}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* <div className="flex justify-center mt-6">
        {Array.from(
          { length: Math.ceil(posts.length / postsPerPage) },
          (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`px-4 py-2 mx-1 rounded-md ${
                currentPage === i + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {i + 1}
            </button>
          )
        )}
      </div> */}
    </div>
  );
};

export default PostSection;
