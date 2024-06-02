import React, { useState } from "react";
import { BiUpvote } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";

const posts = [
  {
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
  },
  {
    id: 2,
    title: "June 2024 Site Maintenance Schedule",
    date: "2024-05-28",
    author: {
      name: "Jane Smith",
      avatar: "https://via.placeholder.com/150", // Replace with actual URL
    },
    tags: ["Maintenance", "Schedule"],
    commentsCount: 8,
    votesCount: 50,
    summary:
      "Our site will undergo maintenance in June. Click for the full schedule and to understand what improvements we are making.",
  },
  {
    id: 3,
    title: "How to Customize Your Profile",
    date: "2024-05-25",
    author: {
      name: "Alice Johnson",
      avatar: "https://via.placeholder.com/150", // Replace with actual URL
    },
    tags: ["Profile", "Customization"],
    commentsCount: 25,
    votesCount: 150,
    summary:
      "Learn how to customize your profile with new themes, backgrounds, and more. Make your profile truly yours.",
  },
  {
    id: 4,
    title: "Community Guidelines Update",
    date: "2024-05-20",
    author: {
      name: "Bob Brown",
      avatar: "https://via.placeholder.com/150", // Replace with actual URL
    },
    tags: ["Guidelines", "Community"],
    commentsCount: 10,
    votesCount: 75,
    summary:
      "We have updated our community guidelines. Please review the changes to ensure a positive experience for everyone.",
  },
  {
    id: 5,
    title: "User Experience Improvements in 2024",
    date: "2024-05-15",
    author: {
      name: "Charlie Davis",
      avatar: "https://via.placeholder.com/150", // Replace with actual URL
    },
    tags: ["UX", "Improvements"],
    commentsCount: 18,
    votesCount: 130,
    summary:
      "Discover the latest improvements we've made to enhance your user experience. Click to see what's new.",
  },
  {
    id: 6,
    title: "Introducing New Post Formats",
    date: "2024-05-10",
    author: {
      name: "David Evans",
      avatar: "https://via.placeholder.com/150", // Replace with actual URL
    },
    tags: ["Post Formats", "Features"],
    commentsCount: 12,
    votesCount: 90,
    summary:
      "We now support various new post formats, including videos and interactive content. Learn how to create engaging posts.",
  },
  {
    id: 7,
    title: "Security Tips for Your Account",
    date: "2024-05-05",
    author: {
      name: "Emma Franklin",
      avatar: "https://via.placeholder.com/150", // Replace with actual URL
    },
    tags: ["Security", "Tips"],
    commentsCount: 30,
    votesCount: 200,
    summary:
      "Keep your account secure with our top security tips. Protect your data and stay safe online.",
  },
  {
    id: 8,
    title: "Highlights from Our Recent Webinar",
    date: "2024-04-30",
    author: {
      name: "Fiona Green",
      avatar: "https://via.placeholder.com/150", // Replace with actual URL
    },
    tags: ["Webinar", "Highlights"],
    commentsCount: 7,
    votesCount: 60,
    summary:
      "Missed our recent webinar? Catch up on the highlights and key takeaways from our expert speakers.",
  },
  {
    id: 9,
    title: "New Collaboration Tools for Teams",
    date: "2024-04-25",
    author: {
      name: "George Harris",
      avatar: "https://via.placeholder.com/150", // Replace with actual URL
    },
    tags: ["Collaboration", "Tools"],
    commentsCount: 20,
    votesCount: 100,
    summary:
      "Our new collaboration tools are here! Enhance teamwork and productivity with these new features.",
  },
  {
    id: 10,
    title: "Getting Started with Our API",
    date: "2024-04-20",
    author: {
      name: "Hannah Ivan",
      avatar: "https://via.placeholder.com/150", // Replace with actual URL
    },
    tags: ["API", "Getting Started"],
    commentsCount: 5,
    votesCount: 40,
    summary:
      "Learn how to get started with our API. Integrate our services into your applications easily and efficiently.",
  },
  {
    id: 11,
    title: "Improving Site Accessibility",
    date: "2024-04-15",
    author: {
      name: "Isla James",
      avatar: "https://via.placeholder.com/150", // Replace with actual URL
    },
    tags: ["Accessibility", "UX"],
    commentsCount: 17,
    votesCount: 110,
    summary:
      "We're committed to making our site accessible to everyone. Click to learn about the improvements we've made.",
  },
  {
    id: 12,
    title: "Top 10 Tips for Effective Team Management",
    date: "2024-04-10",
    author: {
      name: "Jack Kelly",
      avatar: "https://via.placeholder.com/150", // Replace with actual URL
    },
    tags: ["Management", "Tips"],
    commentsCount: 14,
    votesCount: 85,
    summary:
      "Effective team management can boost productivity and morale. Here are our top 10 tips to manage your team effectively.",
  },
];

const PostSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  // Calculate indexes for slicing posts array based on current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
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
        {posts.map((post) => (
          <Link
            to={`/post-details/${post.id}`}
            key={post.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-100 cursor-pointer transition transform hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-center mb-4">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src={post.author.avatar}
              />
              <div className="text-sm">
                <p className="text-gray-900 leading-none">{post.author.name}</p>
                <p className="text-gray-600">
                  {new Date(post.date).toLocaleDateString()}
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
            <p className="text-gray-600 text-sm mb-4">{post.summary}</p>
            <div className="flex items-center justify-between text-gray-500 text-sm">
              <div className="flex items-center">
                <BiUpvote />
                <span>{post.votesCount}</span>
              </div>
              <div className="flex items-center">
                <FaRegComment />
                <span>{post.commentsCount}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-6">
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
      </div>
    </div>
  );
};

export default PostSection;
