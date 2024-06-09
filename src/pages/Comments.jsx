import { useParams } from "react-router-dom";
import useCommentsPost from "../hooks/useCommentsPost";
import Loading from "../components/Loading";
import Select from "react-select";
import { useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import toast from "react-hot-toast";
import { AuthContext } from "../providers/AuthProvider";

const Comments = () => {
  const { postId } = useParams();
  const { comments, isLoading } = useCommentsPost(postId);
  const [feedback, setFeedback] = useState("");
  const [report, setReport] = useState(true);
  const axiosFetch = useAxios();
  const { user } = useContext(AuthContext);

  const { mutateAsync } = useMutation({
    mutationFn: async (reportedData) => {
      const { data } = await axiosFetch.post("/reports", reportedData);
      return data;
    },
    onSuccess: () => {
      toast.success("Comment reported successfully");
      setReport(true);
    },
  });

  const options = [
    { value: "spam", label: "Spam" },
    { value: "inappropriate", label: "Inappropriate" },
    { value: "violence", label: "Violence" },
  ];

  const handleChange = (option) => {
    if (option) {
      setFeedback(option);
      setReport(false);
    }
  };

  const handleReport = async (comment) => {
    const reportedData = {
      feedback: feedback?.value,
      postId,
      comment: comment?.comment,
      commentId: comment?._id,
      status: "reported",
      reportedBy: {
        name: user?.displayName,
        email: user?.email,
      },
      time: new Date().toISOString(),
      author: {
        name: comment?.author?.name,
        email: comment?.author?.email,
        image: comment?.author?.image,
      },
    };
    await mutateAsync(reportedData);
  };

  if (isLoading) return <Loading />;

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
                    Comments
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-neutral-400">
                    You can always report comments that violate the community.
                  </p>
                </div>
              </div>

              <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead className="bg-gray-50 dark:bg-neutral-800">
                  <tr>
                    <th scope="col" className="ps-6 py-3 text-start">
                      <label
                        htmlFor="hs-at-with-checkboxes-main"
                        className="flex justify-center items-center"
                      >
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                          No.
                        </span>
                      </label>
                    </th>

                    <th
                      scope="col"
                      className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start"
                    >
                      <div className="flex justify-center items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                          User
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex justify-center items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                          Comment
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex justify-center items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                          Feedback
                        </span>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 text-start">
                      <div className="flex justify-center items-center gap-x-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                          Report
                        </span>
                      </div>
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700 ">
                  {comments?.map((comment, index) => (
                    <tr key={comment._id}>
                      <td className="size-px whitespace-nowrap">
                        <div className="ps-6 py-3">
                          <label
                            htmlFor="hs-at-with-checkboxes-1"
                            className="flex justify-center items-center"
                          >
                            <div>{index + 1}</div>
                          </label>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap ">
                        <div className="ps-6 pe-6 py-3">
                          <div className="flex justify-center items-center gap-x-3">
                            <img
                              className="inline-block size-[38px] rounded-full"
                              src={comment.author.image}
                              alt="Image Description"
                            />
                            <div>
                              <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                                {comment.author.name}
                              </span>
                              <span className="block text-sm text-gray-500 dark:text-neutral-500">
                                {comment.author.email}
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="h-px w-72 whitespace-nowrap">
                        <div className=" py-3 flex justify-center items-center">
                          <span className="block text-sm text-gray-500 dark:text-neutral-500">
                            {comment?.comment.length > 20 ? (
                              <p className="whitespace-no-wrap">
                                {comment?.comment.substring(0, 20)}...
                                <button
                                  onClick={() =>
                                    document
                                      .getElementById("my_modal_5")
                                      .showModal()
                                  }
                                  className="text-blue-500 hover:underline hover:text-blue-700"
                                >
                                  read more
                                </button>
                                <dialog
                                  id="my_modal_5"
                                  className="modal text-wrap"
                                >
                                  <div className="modal-box w-11/12 max-w-5xl">
                                    <h3 className="font-bold text-lg">
                                      Comment
                                    </h3>
                                    <p className="py-4">{comment?.comment}</p>
                                    <div className="modal-action">
                                      <form method="dialog">
                                        <button className="btn">Close</button>
                                      </form>
                                    </div>
                                  </div>
                                </dialog>
                              </p>
                            ) : (
                              comment.comment
                            )}
                          </span>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3 flex justify-center items-center">
                          <Select
                            isClearable
                            options={options}
                            className="w-full"
                            placeholder="Select a feedback"
                            onChange={handleChange}
                            menuPosition="fixed"
                            menuPlacement="auto"
                          />
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3 flex items-center justify-center">
                          <button
                            onClick={() => handleReport(comment)}
                            className={`inline-flex  items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-60 disabled:cursor-not-allowed`}
                            disabled={report}
                          >
                            Report
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
                <div className="">
                  <p className="text-sm text-gray-600 dark:text-neutral-400">
                    <span className="font-semibold text-gray-800 dark:text-neutral-200">
                      {comments?.length}
                    </span>{" "}
                    comments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
