import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Announcements = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: async (announcement) => {
      const { data } = await axiosSecure.post("/announcements", announcement);
      return data;
    },
    onSuccess: () => {
      toast.success("Announcement created successfully.");
      queryClient.invalidateQueries(["announcements"]);
      reset();
    },
  });

  const onSubmit = async (data) => {
    const { title, description } = data;
    const date = new Date().toISOString();
    const announcement = { title, description, date };
    await mutateAsync(announcement);
  };

  return (
    <div className="mt-10 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Make Announcement
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              name="title"
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
              placeholder="Enter announcement title"
              {...register("title", { required: true })}
            />
            <p className="text-sm mt-2 text-red-500">
              {errors.title && <span>This field is required</span>}
            </p>
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-lime-500 focus:border-lime-500 sm:text-sm"
              placeholder="Enter announcement description"
              {...register("description", { required: true })}
            ></textarea>
            <p className="text-sm mt-2 text-red-500">
              {errors.description && <span>This field is required</span>}
            </p>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-neutral-800 bg-lime-400 hover:bg-lime-500 focus:outline-none "
            >
              Submit Announcement
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Announcements;
