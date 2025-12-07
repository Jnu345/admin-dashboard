"use client";
import { useState, useEffect } from "react";

export default function useProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const STORAGE_KEY = "dashboard_profile";

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      setProfile(JSON.parse(saved));
      setLoading(false);
    } else {
      fetchRandomProfile();
    }
  }, []);

  const fetchRandomProfile = async () => {
    try {
      const res = await fetch("https://randomuser.me/api/");
      const data = await res.json();
      const user = data.results[0];

      const formatted = {
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        phone: user.phone,
        picture: user.picture.large,
      };

      setProfile(formatted);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(formatted));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const saveProfile = (updated) => {
    setProfile(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const resetProfile = () => {
  localStorage.removeItem(STORAGE_KEY);
  setLoading(true);
  fetchRandomProfile();
};


  return { profile, loading, saveProfile, resetProfile };
}
