"use client";
import { useState, useEffect } from "react";
import useSettings from "../../hooks/useSettings";

export default function SettingsPage() {
  const { settings, loading, saveSettings, resetSettings } = useSettings();
  const [form, setForm] = useState(settings);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setForm(settings);
  }, [settings]);

  const update = (key, value) => setForm(prev => ({ ...prev, [key]: value }));

  const handleSave = () => {
    saveSettings(form);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  const handleReset = () => {
    resetSettings();
    setForm({
      theme: "light",
      emailNotifications: true,
      pushNotifications: true,
      twoFactorAuth: false,
    });
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  if (loading) return <p>Loading settings...</p>;

  return (
    <div className="p-8 max-w-3xl relative">
      {/* Success Banner */}
      {success && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 
    bg-green-600 text-white px-6 py-3 rounded shadow-lg z-50">
          Success! Your settings have been updated.
        </div>
      )}

      <h1 className="text-2xl font-bold mb-6">Settings</h1>


      {/* Notifications */}
      <div className="mb-6 p-4 bg-gray-200 dark:bg-gray-900 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-3">Notifications</h2>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={form.emailNotifications}
            onChange={(e) => update("emailNotifications", e.target.checked)}
          />
          Email Notifications
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={form.pushNotifications}
            onChange={(e) => update("pushNotifications", e.target.checked)}
          />
          Push Notifications
        </label>
      </div>

      {/* Security */}
      <div className="mb-6 p-4 bg-gray-200 dark:bg-gray-900 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-3">Security</h2>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={form.twoFactorAuth}
            onChange={(e) => update("twoFactorAuth", e.target.checked)}
          />
          Two-Factor Authentication
        </label>
      </div>

      <div className="flex gap-3">
        <button
          onClick={handleSave}
          className="px-4 py-2 bg-indigo-900 text-white rounded shadow"
        >
          Update Settings
        </button>

        <button
          onClick={handleReset}
          className="px-4 py-2 bg-red-600 text-white rounded shadow"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
