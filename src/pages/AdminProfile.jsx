import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
const dataAdmin = {
  name: "Admin Name",
  image:
    "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  email: "admin@example.com",
  posts: 100,
  comments: 250,
  users: 50,
};

const AdminProfile = () => {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [admin, setAdmin] = useState(dataAdmin);

  const handleAddTag = (e) => {
    e.preventDefault();
  };

  const data = [
    { name: "Posts", value: admin.posts },
    { name: "Comments", value: admin.comments },
    { name: "Users", value: admin.users },
  ];

  const COLORS = ["#FF6384", "#36A2EB", "#FFCE56"];

  return (
    <div className="lg:ml-[260px] mx-auto p-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Admin Profile</h2>
        <div className="flex items-center mb-6">
          <img
            src={admin.image}
            alt="Admin"
            className="w-24 h-24 rounded-full mr-4"
          />
          <div>
            <h3 className="text-xl font-semibold">{admin.name}</h3>
            <p className="text-gray-600">{admin.email}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="p-4 bg-gray-200 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold">Posts</h4>
            <p className="text-2xl">{admin.posts}</p>
          </div>
          <div className="p-4 bg-gray-200 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold">Comments</h4>
            <p className="text-2xl">{admin.comments}</p>
          </div>
          <div className="p-4 bg-gray-200 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold">Users</h4>
            <p className="text-2xl">{admin.users}</p>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4">Site Statistics</h3>
          <div className="w-full md:w-1/2 mx-auto">
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx={200}
                cy={200}
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
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
