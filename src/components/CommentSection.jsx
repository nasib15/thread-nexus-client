/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "./../providers/AuthProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import toast from "react-hot-toast";
import useCommentsPost from "../hooks/useCommentsPost";
import Loading from "./Loading";
import { formatTimeAgo } from "./CompareTime";

const CommentSection = ({ title }) => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const axiosFetch = useAxios();
  const { comments, isLoading } = useCommentsPost(id);
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: async (commentData) => {
      const { data } = await axiosFetch.post("comments", commentData);
      return data;
    },
    onSuccess: () => {
      toast.success("Comment posted successfully.");
      queryClient.invalidateQueries(["comments", id]);
    },
  });

  const { mutateAsync: commentAsync } = useMutation({
    mutationFn: async () => {
      const { data } = await axiosFetch.patch(`post/${id}?comment=${"true"}`);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("Please login to comment.");
      return;
    }
    const commentData = {
      comment: e.target.comment.value,
      postId: id,
      author: {
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
      },
      title,
      time: new Date().toISOString(),
    };

    await mutateAsync(commentData);
    await commentAsync();
    e.target.reset();
  };

  if (isLoading) return <Loading />;

  return (
    <div>
      <div className="border-t border-gray-200 pt-4">
        <h3 className="text-2xl font-semibold mb-4">Comments</h3>

        <form onSubmit={handleSubmitComment} className="mb-6">
          <textarea
            name="comment"
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

        <div>
          {comments?.map((comment, index) => (
            <div key={index} className="space-y-4 mt-4">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    className="size-10 rounded-full"
                    src={comment?.author?.image}
                  />
                </div>
                <div>
                  <div className="text-lg font-semibold">
                    {comment?.author?.name}
                  </div>
                  <div className="text-gray-700">{comment?.comment}</div>
                  <div className="text-sm text-gray-500 mt-1">
                    {formatTimeAgo(comment?.time)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
