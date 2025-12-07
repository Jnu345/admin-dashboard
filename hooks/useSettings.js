"use client";
import { useState, useEffect } from "react";

export default function useSettings() {
  const STORAGE_KEY = "dashboard_settings";

  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    twoFactorAuth: false,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      setSettings(parsed);
    }
    setLoading(false);
  }, []);


  const saveSettings = (updated) => {
    setSettings(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const resetSettings = () => {
    const defaultSettings = {
      emailNotifications: true,
      pushNotifications: true,
      twoFactorAuth: false,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultSettings));
    setSettings(defaultSettings);
  };

  return { settings, loading, saveSettings, resetSettings };
}
