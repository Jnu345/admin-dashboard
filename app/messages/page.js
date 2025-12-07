"use client";
import { useState } from "react";
import useMessages from "../../hooks/useMessages";
import { FaSearch } from "react-icons/fa";

export default function MessagesPage() {
  const { messages, loading, markAsRead, deleteMessage } = useMessages();
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [mobileChatOpen, setMobileChatOpen] = useState(false);


  if (loading) return <p>Loading messages...</p>;

  return (
    <div className="flex overflow-x-hidden h-fit">
      <div className="p-8 min-h-screen h-fit overflow-x-hidden overflow-y-auto
       max-md:z-0 w-full md:max-w-lg border-l border-r border-gray-700">
        <h1 className="text-2xl font-bold mb-6">Messages</h1>
        <div className="w-full h-fit p-2 border border-gray-500 rounded-3xl flex items-center justify-center gap-x-2">
          <FaSearch className="text-gray-400 text-sm" />
          <input className="w-full focus:outline-none focus:ring-0 focus:border-transparent" placeholder="Search Messages"></input>
        </div>


        <ul className="flex flex-col mt-2 ">
          {messages.map(msg => (
            <li
              key={msg.id}
              onClick={() => {
                setSelectedMessage(msg);
                setMobileChatOpen(true);
              }}
              className={`p-4 hover:border-t hover:border-b ${msg.read ? "bg-gray-200 dark:bg-black" : "bg-gray-300 dark:bg-gray-950 font-bold"
                } flex justify-between items-center transition-all duration-100 cursor-pointer`}
            >
              <div>
                <p className="text-black dark:text-white">{msg.from}</p>
                <p className="text-gray-800 dark:text-gray-300">{msg.content}</p>
              </div>
              <div className="flex gap-2">
                {!msg.read && (
                  <button
                    onClick={() => markAsRead(msg.id)}
                    className="px-2 py-1 bg-green-600 text-white rounded"
                  >
                    Mark Read
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={`w-full h-screen bg-black border-l border-gray-700 p-6 max-md:fixed top-0 right-0 transform transition-transform duration-300
    max-md:z-50 ${selectedMessage ? "translate-x-0" : "translate-x-full"} `}>

        {!selectedMessage ? (
          // DEFAULT view
          <div className="w-fit h-full mx-auto flex flex-col justify-center items-start gap-y-6">
            <h1 className="text-4xl font-bold">Select a message</h1>
            <p className="text-lg text-[#71767B]">
              Choose from your existing conversations or start a new one
            </p>
            <button className="mt-4 text-xl font-bold bg-blue-700 px-6 py-4 rounded-4xl cursor-pointer">
              New message
            </button>
          </div>
        ) : (
          // CHAT VIEW
          <div className="flex flex-col h-full">
            <div onClick={() =>setSelectedMessage(null)}>back -- </div>
            <div className="border-b border-gray-600 pb-4">
              <h2 className="text-2xl font-bold">{selectedMessage.from}</h2>
              <p className="text-gray-400 text-sm">Conversation with this user</p>
            </div>

            <div className="flex flex-col flex-1 overflow-y-auto mt-4 space-y-4">
              <div className="bg-gray-200 dark:bg-gray-800 p-3 rounded max-w-md">
                {selectedMessage.content}
              </div>
              <div className="bg-blue-600 text-white p-3 rounded self-end max-w-md">
                Your reply example...
              </div>
            </div>

            {/* Send box */}
            <div className="mt-auto flex gap-2 pt-4 border-t border-gray-600">
              <input
                className="flex-1 p-2 rounded bg-gray-700 text-white focus:outline-none"
                placeholder="Type your message..."
              />
              <button className="px-4 py-2 bg-blue-600 rounded text-white">
                Send
              </button>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
