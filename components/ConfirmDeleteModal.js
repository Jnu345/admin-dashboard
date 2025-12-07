"use client";

export default function ConfirmDeleteModal({ isOpen, onClose, onConfirm, userName }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-100 dark:bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-200 dark:bg-gray-900 rounded-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
        <p className="mb-4">Are you sure you want to delete <strong>{userName}</strong>?</p>
        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 text-black rounded">Cancel</button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
