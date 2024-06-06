const Comments = () => {
  const comments = [
    { id: 1, email: "user1@example.com", text: "This is a great post!" },
    {
      id: 2,
      email: "user2@example.com",
      text: "I found this very helpful, thanks!",
    },
    { id: 3, email: "user3@example.com", text: "Not sure I agree with this." },
    { id: 4, email: "user4@example.com", text: "This is spam!" },
  ];

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
                  <tr>
                    <td className="size-px whitespace-nowrap">
                      <div className="ps-6 py-3">
                        <label
                          htmlFor="hs-at-with-checkboxes-1"
                          className="flex justify-center items-center"
                        >
                          <div>1</div>
                          <span className="sr-only">Checkbox</span>
                        </label>
                      </div>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                        <div className="flex justify-center items-center gap-x-3">
                          <img
                            className="inline-block size-[38px] rounded-full"
                            src=""
                            alt="Image Description"
                          />
                          <div>
                            <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                              Christina Bersh
                            </span>
                            <span className="block text-sm text-gray-500 dark:text-neutral-500">
                              christina@site.com
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="h-px w-72 whitespace-nowrap">
                      <div className="px-6 py-3 flex justify-center">
                        <span className="block text-sm text-gray-500 dark:text-neutral-500">
                          Human resources
                        </span>
                      </div>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <div className="px-6 py-3 flex justify-center items-center">
                        <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                          <svg
                            className="size-2.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                          </svg>
                          Active
                        </span>
                      </div>
                    </td>
                    <td className="size-px whitespace-nowrap">
                      <div className="px-6 py-3 flex items-center justify-center">
                        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                          Resolve
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
                <div>
                  <p className="text-sm text-gray-600 dark:text-neutral-400">
                    <span className="font-semibold text-gray-800 dark:text-neutral-200">
                      12
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
