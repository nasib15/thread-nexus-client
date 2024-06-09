// AddPost.js
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { AuthContext } from "../providers/AuthProvider";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import toast from "react-hot-toast";
import BecomeMember from "../components/BecomeMember";
import Loading from "./../components/Loading";
import useUser from "../hooks/useUser";
import useUserPosts from "../hooks/useUserPosts";

const AddPost = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [tags, setTags] = useState(null);
  const { user } = useContext(AuthContext);
  const axiosFetch = useAxios();
  const queryClient = useQueryClient();
  const { userData } = useUser();
  const { userPosts, isLoading } = useUserPosts();

  // Add post mutation
  const { mutateAsync } = useMutation({
    mutationFn: async (postData) => {
      const { data } = await axiosFetch.post("/posts", postData);
      return data;
    },
    onSuccess: () => {
      toast.success("Post added successfully");
      queryClient.invalidateQueries(["posts"]);
    },
  });

  const options = [
    { value: "technology", label: "Technology" },
    { value: "health", label: "Health" },
    { value: "education", label: "Education" },
    { value: "management", label: "Management" },
    { value: "tips", label: "Tips" },
  ];

  const handleChange = (option) => {
    if (option) {
      setTags(option);
    }
  };

  const onSubmit = async (data) => {
    const { title, description, upvote, downvote } = data;
    const time = new Date().toISOString();
    const postData = {
      author: {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      },
      title,
      description,
      tags: tags?.map((tag) => tag.value),
      time,
      comments_count: 0,
      upvote_count: parseInt(upvote),
      downvote_count: parseInt(downvote),
    };
    await mutateAsync(postData);
    setTags(null);
    reset();
  };

  if (isLoading) return <Loading />;

  if (userData?.membership_status === "normal user" && userPosts?.length >= 5) {
    return <BecomeMember />;
  }

  return (
    <div>
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden p-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Add New Post
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="postTitle"
            >
              Post Title
            </label>
            <input
              name="postTitle"
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
              placeholder="Enter post title"
              {...register("title", { required: true })}
            />
            <p className="text-sm mt-2 text-red-500">
              {errors.title && <span>This field is required</span>}
            </p>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="postDescription"
            >
              Post Description
            </label>
            <textarea
              name="postDescription"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
              placeholder="Enter post description"
              rows="4"
              {...register("description", { required: true })}
            />
            <p className="text-sm mt-2 text-red-500">
              {errors.description && <span>This field is required</span>}
            </p>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2 "
              htmlFor="tag"
            >
              Tag
            </label>
            <Select
              isMulti
              isClearable
              options={options}
              className="w-full"
              placeholder="Select a tag"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="upvote"
            >
              Upvote Count
            </label>
            <input
              name="upvote"
              type="number"
              defaultValue={0}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
              {...register("upvote", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="downvote"
            >
              Downvote Count
            </label>
            <input
              name="downvote"
              type="number"
              defaultValue={0}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
              {...register("downvote", { required: true })}
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-lime-500 text-neutral-800 font-medium rounded-lg shadow-md hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-opacity-75"
          >
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
