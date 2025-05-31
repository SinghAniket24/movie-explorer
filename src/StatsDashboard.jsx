import { FaUsers, FaChartLine, FaDollarSign, FaTasks, FaRocket, FaPlus } from "react-icons/fa";

function StatsDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">📊 Dashboard Overview</h1>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="p-6 rounded-xl shadow-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:scale-105 transition">
          <FaUsers className="text-3xl mb-2" />
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-3xl font-bold mt-1">18,430</p>
        </div>
        <div className="p-6 rounded-xl shadow-lg bg-gradient-to-r from-green-500 to-green-700 hover:scale-105 transition">
          <FaChartLine className="text-3xl mb-2" />
          <h2 className="text-lg font-semibold">Monthly Traffic</h2>
          <p className="text-3xl font-bold mt-1">234K</p>
        </div>
        <div className="p-6 rounded-xl shadow-lg bg-gradient-to-r from-yellow-500 to-yellow-700 hover:scale-105 transition">
          <FaDollarSign className="text-3xl mb-2" />
          <h2 className="text-lg font-semibold">Revenue</h2>
          <p className="text-3xl font-bold mt-1">$76.2K</p>
        </div>
        <div className="p-6 rounded-xl shadow-lg bg-gradient-to-r from-pink-500 to-pink-700 hover:scale-105 transition">
          <FaTasks className="text-3xl mb-2" />
          <h2 className="text-lg font-semibold">Active Tasks</h2>
          <p className="text-3xl font-bold mt-1">128</p>
        </div>
      </div>

      {/* Chart + Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Chart Box (mock) */}
        <div className="lg:col-span-2 bg-white/10 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Traffic Overview</h2>
          <div className="h-48 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-2xl opacity-30 font-bold">
              Line Chart Placeholder
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white/10 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <button className="w-full flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 py-2 px-4 rounded-xl shadow">
              <FaRocket /> Launch Campaign
            </button>
            <button className="w-full flex items-center gap-2 bg-pink-600 hover:bg-pink-700 py-2 px-4 rounded-xl shadow">
              <FaPlus /> Add New User
            </button>
            <button className="w-full flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 py-2 px-4 rounded-xl shadow">
              <FaTasks /> View All Tasks
            </button>
          </div>
        </div>
      </div>

      {/* User List */}
      <div className="bg-white/10 p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Recent Users</h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto text-left text-white">
            <thead>
              <tr className="border-b border-white/20">
                <th className="py-2">Name</th>
                <th className="py-2">Email</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="py-2">Aniket Singh</td>
                <td className="py-2">aniket@example.com</td>
                <td className="py-2 text-green-400">Active</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="py-2">Riya Sharma</td>
                <td className="py-2">riya@example.com</td>
                <td className="py-2 text-yellow-400">Pending</td>
              </tr>
              <tr>
                <td className="py-2">Aman Joshi</td>
                <td className="py-2">aman@example.com</td>
                <td className="py-2 text-red-400">Inactive</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default StatsDashboard;
