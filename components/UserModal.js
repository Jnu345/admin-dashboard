import { useState, useEffect } from "react";

export default function UserModal({ isOpen, onClose, onSave, initialData }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setEmail(initialData.email);
    } else {
      setName("");
      setEmail("");
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (!name.trim() || !email.trim()) {
      alert("Please fill in all fields");
      return;
    }

    const user = initialData ? { ...initialData, name, email } : { name, email };
    onSave(user);
    setName("");
    setEmail("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-100 dark:bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-200 dark:bg-gray-900 rounded-lg p-6 w-96">
        <h2 className="text-xl font-bold mb-4">{initialData ? "Edit User" : "Add User"}</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-3 p-2 border rounded"
        />
        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="cursor-pointer px-4 py-2 bg-gray-300 text-black rounded">Cancel</button>
          <button onClick={handleSave} className=" cursor-pointer px-4 py-2 bg-blue-600 text-white rounded">Save</button>
        </div>
      </div>
    </div>
  );
}
