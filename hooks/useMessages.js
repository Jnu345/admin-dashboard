"use client";
import { useState, useEffect } from "react";

export default function useMessages() {
  const STORAGE_KEY = "dashboard_messages";

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setMessages(JSON.parse(saved));
    } else {
      fetchMessages();
    }
    setLoading(false);
  }, []);

  const fetchMessages = async () => {
    try {
      // API فرضی یا random data
      const dummy = [
        { id: 1, from: "Alice", content: "Hey there!", read: false },
        { id: 2, from: "Bob", content: "Don't forget the meeting", read: false },
        { id: 3, from: "Charlie", content: "Check this out!", read: true },
      ];
      setMessages(dummy);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dummy));
    } catch (err) {
      console.error(err);
    }
  };

  const markAsRead = (id) => {
    const updated = messages.map(m => m.id === id ? { ...m, read: true } : m);
    setMessages(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const deleteMessage = (id) => {
    const updated = messages.filter(m => m.id !== id);
    setMessages(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  return { messages, loading, markAsRead, deleteMessage };
}
