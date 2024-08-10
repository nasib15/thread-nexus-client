// ManageUsers.js
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useState } from "react";
import Loading from "./../components/Loading";
import useFullSiteData from "../hooks/useFullSiteData";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const [currentPage, setCurrentPage] = useState(1);
  const { usersData: users } = useFullSiteData();
  const usersCount = users?.length;

  // getting users data
  const { data: usersData = [], isLoading } = useQuery({
    queryKey: ["usersData", currentPage],
    queryFn: async () => {
      const { data } = await axiosSecure(
        `/users?size=${10}&page=${currentPage}`
      );
      return data;
    },
  });

  // function to make user admin
  const { mutateAsync } = useMutation({
    mutationFn: async (userData) => {
      const { data } = await axiosSecure.patch(`/user/${userData.email}`, {
        membership_status: userData.member,
        user_role: "admin",
      });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
      toast.success("User is now an admin");
    },
  });

  if (isLoading) return <Loading />;

  const usersLength = usersCount;
  const totalPages = Math.ceil(usersLength / 10);
  const pages = [...Array(totalPages).keys()];

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
              {usersData?.map((user) => (
                <tr
                  key={user._id}
                  className="bg-gray-100 text-gray-700 border-b border-gray-200"
                >
                  <td className="py-4 px-6 text-center">{user.name}</td>
                  <td className="py-4 px-6 text-center">{user.email}</td>
                  <td className="py-4 px-6 text-center">
                    {user.membership_status === "member"
                      ? "Member"
                      : "Normal User"}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {user.user_role === "admin" ? (
                      <span className="text-green-600 font-bold">Admin</span>
                    ) : (
                      <button
                        onClick={async () => {
                          const data = {
                            email: user?.email,
                            member: user?.membership_status,
                          };
                          await mutateAsync(data);
                        }}
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
          <div className="flex justify-center mt-6">
            {
              <div className="flex space-x-2">
                {pages.map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page + 1)}
                    className={`${
                      currentPage === page + 1
                        ? "bg-lime-500 text-white"
                        : "bg-white text-gray-800"
                    } px-3 py-1 rounded-lg`}
                  >
                    {page + 1}
                  </button>
                ))}
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
