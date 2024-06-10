import React from "react";
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const Announcement = () => {
  const axiosFetch = useAxios();
  const { data: announcements } = useQuery({
    queryKey: ["announcements"],
    queryFn: async () => {
      const { data } = await axiosFetch("/announcements");
      return data;
    },
  });
  if (!announcements) return null;
  if (announcements.length > 0) {
    return (
      <div className="my-24">
        <div className="text-center space-y-4">
          <h2
            id="announcements"
            className="text-3xl text-neutral-900 font-bold"
          >
            Latest Announcements
          </h2>
          <p className="text-neutral-600">
            Stay updated with the latest news and updates from our team. Click
            on an announcement to read more.
          </p>
        </div>
        <div className="grid gap-4 mt-10">
          {announcements?.map((announcement) => (
            <div
              key={announcement._id}
              className="bg-white p-6 rounded-lg shadow-lg hover:bg-gray-100 cursor-pointer transition transform hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {announcement.title}
              </h3>
              <p className="text-gray-500 text-sm">
                {new Date(announcement.date).toLocaleDateString("en-UK")}
              </p>
              <p className="mt-4 text-gray-700">{announcement.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Announcement;
