"use client";

import { useState, useEffect } from "react";
import { fetchUsers } from "../utils/api";

export default function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers()
      .then(data => setUsers(data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const addUser = (user) => setUsers(prev => [...prev, { id: prev.length + 1, ...user }]);
  const editUser = (updatedUser) => setUsers(prev => prev.map(u => u.id === updatedUser.id ? updatedUser : u));
  const deleteUser = (id) => setUsers(prev => prev.filter(u => u.id !== id));

  return { users, loading, addUser, editUser, deleteUser };
}
