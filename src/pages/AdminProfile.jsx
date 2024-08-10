import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import useUser from "../hooks/useUser";
import Loading from "../components/Loading";
import useFullSiteData from "../hooks/useFullSiteData";
import useTags from "../hooks/useTags";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";

const AdminProfile = () => {
  const { tags } = useTags();
  const { userData, isLoading } = useUser();
  const axiosSecure = useAxiosSecure();
  const sitesData = useFullSiteData();
  const { postsData, usersData, commentsData } = sitesData;
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation({
    mutationFn: async (tag) => {
      const { data } = await axiosSecure.post("/tags", { name: tag });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["tags"]);
      toast.success("Tag added successfully");
    },
  });

  if (isLoading) return <Loading />;

  const handleAddTag = async (e) => {
    e.preventDefault();
    await mutateAsync(e.target.tag.value);
    e.target.reset();
  };

  const data = [
    { name: "Users", value: usersData?.length },
    { name: "Posts", value: postsData?.length },
    { name: "Comments", value: commentsData?.length },
  ];

  const COLORS = ["#FF6384", "#36A2EB", "#FFCE56"];

  return (
    <div>
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Admin Profile</h2>
        <div className="flex items-center mb-6">
          <img
            src={userData?.image}
            alt="Admin"
            className="size-20 rounded-full mr-4"
          />
          <div>
            <h3 className="text-xl font-semibold">{userData?.name}</h3>
            <p className="text-gray-600">{userData?.email}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="p-4 bg-gray-200 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold">Users</h4>
            <p className="text-2xl">{usersData?.length}</p>
          </div>
          <div className="p-4 bg-gray-200 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold">Posts</h4>
            <p className="text-2xl">{postsData?.length}</p>
          </div>
          <div className="p-4 bg-gray-200 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold">Comments</h4>
            <p className="text-2xl">{commentsData?.length}</p>
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
              name="tag"
              type="text"
              className="flex-1 p-2 border rounded-lg mr-2"
              placeholder="Enter new tag"
            />
            <button
              type="submit"
              className="p-2 bg-lime-400 text-neutral-800 rounded-lg hover:bg-lime-500 transition duration-200"
            >
              Add Tag
            </button>
          </form>
          <div className="mt-4">
            <h4 className="text-lg font-semibold">Current Tags:</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-2">
              {tags.map((tag, index) => (
                <button
                  key={index}
                  className="bg-lime-200 text-lime-700 px-4 py-2 rounded-lg hover:bg-lime-300 focus:outline-none"
                  // onClick={() => handleTagClick(tag)}
                >
                  {tag?.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
