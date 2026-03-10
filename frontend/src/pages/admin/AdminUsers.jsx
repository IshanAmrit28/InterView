import React, { useState, useEffect } from "react";
import { fetchAllUsers } from "../../services/adminService";
import { Users, Search, Loader2, XCircle } from "lucide-react";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    setLoading(true);
    try {
      const data = await fetchAllUsers();
      setUsers(data.users || []);
    } catch (err) {
      setError(err.message || "Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-red-500">
        <Loader2 className="w-12 h-12 mb-4 animate-spin" />
        <p className="text-lg text-gray-300">Loading user data...</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      {error && (
        <div className="bg-red-900/40 border border-red-500/50 text-red-200 p-4 rounded-xl mb-6 flex items-center gap-3">
          <XCircle className="text-red-500" />
          {error}
        </div>
      )}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-100">Registered Users</h2>
        <div className="flex items-center bg-gray-800 rounded-lg px-4 py-2 border border-gray-700">
          <Search size={18} className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search users..."
            className="bg-transparent border-none text-white focus:outline-none w-48 text-sm"
            disabled
            title="Search is not implemented"
          />
        </div>
      </div>
      
      <div className="overflow-x-auto rounded-xl border border-gray-700/50">
        <table className="w-full text-left">
          <thead className="bg-gray-800/80 text-gray-400 text-xs uppercase tracking-wider">
            <tr>
              <th className="p-4 rounded-tl-xl font-semibold">User ID</th>
              <th className="p-4 font-semibold">Name</th>
              <th className="p-4 font-semibold">Email</th>
              <th className="p-4 font-semibold">Role</th>
              <th className="p-4 rounded-tr-xl font-semibold">Joined Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800/50 text-sm">
            {users.length === 0 ? (
              <tr>
                <td colSpan={5} className="p-10 text-center text-gray-500">
                  No users found in the system.
                </td>
              </tr>
            ) : (
              users.map((u) => (
                <tr key={u._id} className="hover:bg-gray-800/30 transition-colors">
                  <td className="p-4 text-gray-500 font-mono text-xs">{u._id}</td>
                  <td className="p-4 font-medium text-gray-200">{u.userName}</td>
                  <td className="p-4 text-gray-400">{u.email}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      u.userType === 'recruiter' 
                        ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' 
                        : 'bg-green-500/20 text-green-400 border border-green-500/30'
                    }`}>
                      {u.userType.toUpperCase()}
                    </span>
                  </td>
                  <td className="p-4 text-gray-500">
                    {new Date(u.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;
