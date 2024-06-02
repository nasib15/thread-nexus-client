// AddPost.js
import React, { useState } from "react";
import Select from "react-select";

const AddPost = () => {
  const [formData, setFormData] = useState({
    authorImage: "",
    authorName: "",
    authorEmail: "",
    postTitle: "",
    postDescription: "",
    tag: null,
    upVote: 0,
    downVote: 0,
  });

  const tagOptions = [
    { value: "technology", label: "Technology" },
    { value: "health", label: "Health" },
    { value: "education", label: "Education" },
    { value: "management", label: "Management" },
    { value: "tips", label: "Tips" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (selectedOption) => {
    setFormData({
      ...formData,
      tag: selectedOption,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
  };

  return (
    <div className="lg:ml-[260px] mx-auto p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden p-6">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          Add New Post
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="authorImage"
            >
              Author Image URL
            </label>
            <input
              type="text"
              id="authorImage"
              name="authorImage"
              value={formData.authorImage}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter author image URL"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="authorName"
            >
              Author Name
            </label>
            <input
              type="text"
              id="authorName"
              name="authorName"
              value={formData.authorName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter author name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="authorEmail"
            >
              Author Email
            </label>
            <input
              type="email"
              id="authorEmail"
              name="authorEmail"
              value={formData.authorEmail}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter author email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="postTitle"
            >
              Post Title
            </label>
            <input
              type="text"
              id="postTitle"
              name="postTitle"
              value={formData.postTitle}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter post title"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="postDescription"
            >
              Post Description
            </label>
            <textarea
              id="postDescription"
              name="postDescription"
              value={formData.postDescription}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter post description"
              rows="4"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="tag"
            >
              Tag
            </label>
            <Select
              id="tag"
              name="tag"
              value={formData.tag}
              onChange={handleSelectChange}
              options={tagOptions}
              className="w-full"
              placeholder="Select a tag"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          >
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
