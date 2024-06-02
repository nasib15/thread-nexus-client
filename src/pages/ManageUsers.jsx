// ManageUsers.js
import React, { useState } from "react";

const ManageUsers = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      isAdmin: false,
      isMember: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      isAdmin: false,
      isMember: false,
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      isAdmin: true,
      isMember: true,
    },
    {
      id: 4,
      name: "Bob Brown",
      email: "bob.brown@example.com",
      isAdmin: false,
      isMember: false,
    },
  ]);

  const makeAdmin = (userId) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, isAdmin: true } : user
      )
    );
  };

  return (
    <div>
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Manage Users</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="w-1/4 py-2">User Name</th>
                <th className="w-1/4 py-2">User Email</th>
                <th className="w-1/4 py-2">Subscription Status</th>
                <th className="w-1/4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="bg-gray-100 text-gray-700 border-b border-gray-200"
                >
                  <td className="py-4 px-6 text-center">{user.name}</td>
                  <td className="py-4 px-6 text-center">{user.email}</td>
                  <td className="py-4 px-6 text-center">
                    {user.isMember ? "Member" : "Non-Member"}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {user.isAdmin ? (
                      <span className="text-green-600 font-bold">Admin</span>
                    ) : (
                      <button
                        onClick={() => makeAdmin(user.id)}
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
