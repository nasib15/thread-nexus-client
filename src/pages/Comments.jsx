import { useParams } from "react-router-dom";
import useCommentsPost from "../hooks/useCommentsPost";
import Loading from "../components/Loading";
import Select from "react-select";
import { useState } from "react";

const Comments = () => {
  const { postId } = useParams();
  const { comments, isLoading } = useCommentsPost(postId);
  const [feedback, setFeedback] = useState("");
  const [report, setReport] = useState(true);

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

  console.log(feedback);

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

                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
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
                      <td className="size-px whitespace-nowrap">
                        <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
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
                        <div className="px-6 py-3 flex justify-center">
                          <span className="block text-sm text-gray-500 dark:text-neutral-500">
                            {comment?.comment.slice(0, 20)}
                          </span>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3 flex justify-center items-center">
                          <Select
                            isClearable
                            options={options}
                            className="w-full "
                            placeholder="Select a feedback"
                            onChange={handleChange}
                          />
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap">
                        <div className="px-6 py-3 flex items-center justify-center">
                          <button
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
                <div>
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
