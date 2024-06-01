import React from "react";

const posts = [
  {
    id: 1,
    title: "Exploring the Benefits of Dark Mode",
    date: "2024-06-01",
    summary:
      "Dark mode is not just a trend; it's a useful feature that can reduce eye strain and save battery life. Click to learn more about its benefits.",
  },
  {
    id: 2,
    title: "June 2024 Site Maintenance Schedule",
    date: "2024-05-28",
    summary:
      "Our site will undergo maintenance in June. Click for the full schedule and to understand what improvements we are making.",
  },
  {
    id: 3,
    title: "How to Customize Your Profile",
    date: "2024-05-25",
    summary:
      "Learn how to customize your profile with new themes, backgrounds, and more. Make your profile truly yours.",
  },
  {
    id: 4,
    title: "Community Guidelines Update",
    date: "2024-05-20",
    summary:
      "We have updated our community guidelines. Please review the changes to ensure a positive experience for everyone.",
  },
  {
    id: 5,
    title: "User Experience Improvements in 2024",
    date: "2024-05-15",
    summary:
      "Discover the latest improvements we've made to enhance your user experience. Click to see what's new.",
  },
  {
    id: 6,
    title: "Introducing New Post Formats",
    date: "2024-05-10",
    summary:
      "We now support various new post formats, including videos and interactive content. Learn how to create engaging posts.",
  },
  {
    id: 7,
    title: "Security Tips for Your Account",
    date: "2024-05-05",
    summary:
      "Keep your account secure with our top security tips. Protect your data and stay safe online.",
  },
  {
    id: 8,
    title: "Highlights from Our Recent Webinar",
    date: "2024-04-30",
    summary:
      "Missed our recent webinar? Catch up on the highlights and key takeaways from our expert speakers.",
  },
  {
    id: 9,
    title: "New Collaboration Tools for Teams",
    date: "2024-04-25",
    summary:
      "Our new collaboration tools are here! Enhance teamwork and productivity with these new features.",
  },
  {
    id: 10,
    title: "Getting Started with Our API",
    date: "2024-04-20",
    summary:
      "Learn how to get started with our API. Integrate our services into your applications easily and efficiently.",
  },
];

const PostSection = () => {
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
          <div
            key={post.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-100 cursor-pointer transition transform hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {post.title}
            </h3>
            <p className="text-gray-500 text-sm">
              {new Date(post.date).toLocaleDateString()}
            </p>
            <p className="mt-4 text-gray-700">{post.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostSection;
