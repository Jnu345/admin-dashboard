"use client";
import Card from "../../components/Card";
import Chart from "../../components/Chart";
import Table from "../../components/Table";
import UserModal from "../../components/UserModal";
import ConfirmDeleteModal from "../../components/ConfirmDeleteModal";
import useUsers from "../../hooks/useUsers";
import useUserModals from "../../hooks/useUserModals";

export default function DashboardPage() {
 const { users, loading, addUser, editUser, deleteUser } = useUsers();
  const {
    modals,
    openAdd, closeAdd,
    openEdit, closeEdit,
    openDelete, closeDelete
  } = useUserModals();

  if (loading) return <p>Loading users...</p>;

  return (
    <div className="p-8 max-h-screen overflow-hidden">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="flex gap-4 mb-4">
        <Card title="Users" value={users.length} />
        <Card title="Revenue" value="$3,200" />
        <Card title="Tasks" value="32" />
      </div>

      <Chart />

      <div className="flex justify-between items-center mt-4 mb-2">
        <h2 className="text-xl font-bold">Users</h2>
        <button
          onClick={() => setModals(prev => ({ ...prev, add: true }))}
          className=" cursor-pointer px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add User
        </button>
      </div>

      <Table
        users={users}
        onDelete={(user) => setModals(prev => ({ ...prev, delete: { isOpen: true, user } }))}
        onEdit={(user) => setModals(prev => ({ ...prev, edit: { isOpen: true, user } }))}
      />

      <UserModal
        isOpen={modals.add}
        onClose={() => setModals(prev => ({ ...prev, add: false }))}
        onSave={addUser}
      />

      <ConfirmDeleteModal
        isOpen={modals.delete.isOpen}
        onClose={() => setModals(prev => ({ ...prev, delete: { isOpen: false, user: null } }))}
        onConfirm={() => {
          deleteUser(modals.delete.user?.id);
          setModals(prev => ({ ...prev, delete: { isOpen: false, user: null } }));
        }}
        userName={modals.delete.user?.name}
      />

      {modals.edit.isOpen && (
        <UserModal
          isOpen={modals.edit.isOpen}
          onClose={() => setModals(prev => ({ ...prev, edit: { isOpen: false, user: null } }))}
          onSave={editUser}
          initialData={modals.edit.user}
        />
      )}
    </div>
  );
}
