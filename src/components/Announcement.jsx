import React from "react";

const Announcement = () => {
  const announcements = [
    {
      id: 1,
      title: "New Feature Release: Dark Mode",
      date: "2024-06-01",
      summary:
        "We are excited to announce the release of Dark Mode on our platform. Click to learn more about this feature.",
    },
    {
      id: 2,
      title: "Scheduled Maintenance on June 5th",
      date: "2024-05-28",
      summary:
        "Our site will undergo scheduled maintenance on June 5th from 2 AM to 4 AM UTC. Click for more details.",
    },
    // Add more announcements as needed
  ];
  return (
    <div className="my-24">
      <div className="text-center space-y-4">
        <h2 className="text-3xl text-neutral-900 font-bold">
          Latest Announcements
        </h2>
        <p className="text-neutral-600">
          Stay updated with the latest news and updates from our team. Click on
          an announcement to read more.
        </p>
      </div>
      <div className="grid gap-4 mt-10">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-100 cursor-pointer transition transform hover:-translate-y-1 hover:shadow-xl"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {announcement.title}
            </h3>
            <p className="text-gray-500 text-sm">
              {new Date(announcement.date).toLocaleDateString()}
            </p>
            <p className="mt-4 text-gray-700">{announcement.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
