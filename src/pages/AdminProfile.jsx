import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import useAxios from "../hooks/useAxios";
import { AuthContext } from "../providers/AuthProvider";

const AdminProfile = () => {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const { user } = useContext(AuthContext);
  const axiosFetch = useAxios();

  // getting admin data
  const { data: adminData } = useQuery({
    queryKey: ["admin"],
    queryFn: async () => {
      const { data } = await axiosFetch(`/user/${user.email}`);
      return data;
    },
  });

  // getting post data
  const { data: postsData } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data } = await axiosFetch(`/posts`);
      return data;
    },
  });

  // getting users data
  const { data: usersData } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosFetch(`/users`);
      return data;
    },
  });

  // getting comment data
  // const { data: adminData } = useQuery({
  //   queryKey: ["admin"],
  //   queryFn: async () => {
  //     const { data } = await axiosFetch(`/user/${user.email}`);
  //     return data;
  //   },
  // });

  const handleAddTag = (e) => {
    e.preventDefault();
  };

  const COLORS = ["#FF6384", "#36A2EB", "#FFCE56"];

  return (
    <div>
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Admin Profile</h2>
        <div className="flex items-center mb-6">
          <img
            src={adminData?.image}
            alt="Admin"
            className="size-20 rounded-full mr-4"
          />
          <div>
            <h3 className="text-xl font-semibold">{adminData?.name}</h3>
            <p className="text-gray-600">{adminData?.email}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="p-4 bg-gray-200 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold">Posts</h4>
            <p className="text-2xl">{postsData?.length}</p>
          </div>
          {/* <div className="p-4 bg-gray-200 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold">Comments</h4>
            <p className="text-2xl">{admin.comments}</p>
          </div> */}
          <div className="p-4 bg-gray-200 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold">Users</h4>
            <p className="text-2xl">{usersData?.length}</p>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4">Site Statistics</h3>
          <div className="w-full md:w-1/2 mx-auto">
            {/* <PieChart width={400} height={400}>
              <Pie
                data={adminData}
                cx={200}
                cy={200}
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {adminData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart> */}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Add Tags</h3>
          <form onSubmit={handleAddTag} className="flex items-center">
            <input
              type="text"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              className="flex-1 p-2 border rounded-lg mr-2"
              placeholder="Enter new tag"
            />
            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Add Tag
            </button>
          </form>
          <div className="mt-4">
            <h4 className="text-lg font-semibold">Current Tags:</h4>
            <ul className="list-disc list-inside">
              {tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
