export default function Table({ users, onDelete, onEdit }) {
  return (
    <div className="bg-gray-200 dark:bg-gray-900 shadow rounded p-4 mt-4 overflow-y-scroll h-56">
      <table className="hidden md:table w-full text-left">
        <thead>
          <tr className="border-b border-gray-400 dark:border-gray-700">
            <th className="px-2 py-1">ID</th>
            <th className="px-2 py-1">Name</th>
            <th className="px-2 py-1">Email</th>
            <th className="px-2 py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr
              key={i}
              className="rounded hover:bg-gray-400 hover:text-black border-b border-gray-300 dark:border-gray-700"
            >
              <td className="px-2 py-1">{i + 1}</td>
              <td className="px-2 py-1">{u.name}</td>
              <td className="px-2 py-1">{u.email}</td>
              <td className="px-2 py-1 flex gap-2">
                <button
                  onClick={() => onEdit(u)}
                  className="px-2 py-1 bg-blue-600 rounded hover:bg-blue-400 text-white"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(u)}
                  className="px-2 py-1 bg-red-600 rounded hover:bg-red-400 text-white"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* --- Mobile Card Version --- */}
      <div className="md:hidden flex flex-col gap-3">
        {users.map((u, i) => (
          <div
            key={i}
            className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow border border-gray-300 dark:border-gray-700"
          >
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                ID
              </span>
              <span className="font-medium">{i + 1}</span>
            </div>

            <div className="flex justify-between mt-2">
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                Name
              </span>
              <span className="font-medium">{u.name}</span>
            </div>

            <div className="flex justify-between mt-2">
              <span className="text-gray-600 dark:text-gray-400 text-sm">
                Email
              </span>
              <span className="font-medium break-all">{u.email}</span>
            </div>

            <div className="flex justify-end gap-2 mt-3">
              <button
                onClick={() => onEdit(u)}
                className="px-2 py-1 bg-blue-600 rounded hover:bg-blue-400 text-white text-sm"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(u)}
                className="px-2 py-1 bg-red-600 rounded hover:bg-red-400 text-white text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
