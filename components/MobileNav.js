"use client";
import { FaHome, FaUser, FaCog, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

export default function MobileNav() {
    const menuItems = [
        { name: "Home", icon: <FaHome />, path: "/" },
        { name: "Messages", icon: <FaEnvelope />, path: "/messages" },
        { name: "Profile", icon: <FaUser />, path: "/profile" },
        { name: "Settings", icon: <FaCog />, path: "/setting" },
    ];

    return (
        <div className="md:hidden fixed bottom-0 w-full bg-indigo-900 dark:bg-gray-900 h-16 flex items-center">
            <ul className="flex justify-around w-full text-white text-2xl">
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <Link href={item.path} className="flex flex-col items-center">
                            {item.icon}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
