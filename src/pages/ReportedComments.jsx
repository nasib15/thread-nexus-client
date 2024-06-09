import Loading from "../components/Loading";
import useReports from "../hooks/useReports";

const ReportedComments = () => {
  const { reports, isLoading } = useReports();

  if (isLoading) return <Loading />;

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
          Reported Comments
        </h2>
        <div className="bg-white shadow overflow-hispanen sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Reports
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Manage reported activities and comments.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <div>
              {reports?.map((report) => (
                <div
                  key={report._id}
                  className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"
                >
                  <span className="text-sm font-medium text-gray-500">
                    Reported User
                  </span>
                  <span className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {report?.author?.name}
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    Reported By
                  </span>
                  <span className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {report?.reportedBy?.name}
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    Date
                  </span>
                  <span className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {new Date(report?.time).toLocaleDateString("en-UK")}
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    Comment
                  </span>
                  <span className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {report.comment}
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    Status
                  </span>
                  <span className="mt-1 capitalize text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {report.status}
                  </span>
                  <div className="mt-1 sm:mt-0 sm:col-span-3 flex justify-end space-x-2">
                    {report.status === "reported" && (
                      <>
                        <button
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                          // onClick={() => handleAction(report.id, "Resolved")}
                        >
                          Resolve
                        </button>
                        <button
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          // onClick={() => handleAction(report.id, "Ignored")}
                        >
                          Ignore
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportedComments;
