// app/components/Sidebar.js
"use client";

import { useState } from "react";
import { FaHome, FaUser, FaCog, FaEnvelope } from "react-icons/fa";
import useProfile from "../hooks/useProfile";
import Link from "next/link";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  const menuItems = [
    { name: "Home", icon: <FaHome />, path: "/" },
    { name: "Messages", icon: <FaEnvelope />, path: "/messages" },
    { name: "Profile", icon: <FaUser />, path: "/profile" },
    { name: "Settings", icon: <FaCog />, path: "/setting" },
  ];

  const { profile, loading } = useProfile();

  const imgSrc = profile?.picture || "/default-avatar.png";

  return (
    <>
    <div className={`bg-indigo-900 dark:bg-gray-900 rounded text-white md:h-screen p-4 pl-10
      hidden md:flex
      max-md:fixed max-md:w-screen
       md:flex-col items-start shadow
    transition-all ${open ? "w-64" : "w-20"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="hidden mb-4 bg-indigo-800 dark:bg-gray-700 px-2 py-1 rounded shadow"
      >
        {open ? "Collapse" : "Open"}
      </button>
      <button className="md:hidden">
        X
      </button>
      <div className={`rounded-full mb-5  ${open ? "w-24 h-24" : "w-12 h-12"}`}>
        <img src={imgSrc} alt="." className="rounded-full " />
      </div>
      <ul className="text-xl">
        {menuItems.map((item, index) => (
          <Link key={index} href={item.path}>
            <li  className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded cursor-pointer">
              <span >{item.icon}</span>
              {open && <span>{item.name}</span>}
            </li>
          </Link>
        ))}
      </ul>
    </div>
    </>
  );
}
