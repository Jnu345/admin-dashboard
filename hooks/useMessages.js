"use client";
import { useState, useEffect, use } from "react";

export default function useMessages() {
  const STORAGE_KEY = "dashboard_messages";

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userMessage, setUserMessage] = useState("");
  const [userMessages, setUserMessages] = useState([]);

  function handleSend() {

    if (!userMessage.trim()) return;


    const newMsg = {
      id: Date.now(),
      from: "You",
      content: userMessage,
      read: true,
      
    };

    setUserMessages(prev => [...prev, newMsg]);

    console.log(userMessages);


    setUserMessage(""); // reset
  }


  const fetchMessages = async () => {
    try {
      const dummy = [
        { id: 1, from: "Alice", content: "Hey there!", read: false, date:"12/09/2025" , time:"16:03" },
        { id: 2, from: "Bob", content: "Don't forget the meeting", read: false, date:"12/09/2025" , time:"15:23" },
        { id: 3, from: "Charlie", content: "Check this out!", read: true , date:"12/09/2025" , time:"13:11"},
      ];
      setMessages(dummy);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(dummy));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setMessages(JSON.parse(saved));
    } else {
      fetchMessages();
    }
    setLoading(false);
  }, []);


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
  return {
    messages,
    loading,
    markAsRead,
    deleteMessage,
    userMessage,
    setUserMessage,
    handleSend,
    userMessages,
    setUserMessages
  };
}
