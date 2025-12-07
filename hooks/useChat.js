"use client";
import { useState, useEffect } from "react";

export default function useChat(selectedUser) {
  const STORAGE_KEY = `chat_${selectedUser?.id}`;
  const [messages, setMessages] = useState([]);

  const channel = new BroadcastChannel("chat_channel");

  useEffect(() => {
    if (!selectedUser) return;

    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setMessages(JSON.parse(saved));

    channel.onmessage = (e) => {
      if (e.data.userId === selectedUser.id) {
        setMessages((prev) => [...prev, e.data.message]);
      }
    };
  }, [selectedUser]);

  const sendMessage = (text) => {
    const msg = {
      id: Date.now(),
      sender: "me",
      text,
      time: new Date().toISOString(),
    };

    const updated = [...messages, msg];
    setMessages(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    channel.postMessage({
      userId: selectedUser.id,
      message: msg,
    });
  };

  return { messages, sendMessage };
}
