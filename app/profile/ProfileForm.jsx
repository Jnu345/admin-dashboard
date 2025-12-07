"use client";
import { useState, useEffect } from "react";
import AvatarUploader from "./AvatarUploader";

export default function ProfileForm({ profile, onSave }) {
  const [data, setData] = useState(profile);

  useEffect(() => {
    setData(profile);
  }, [profile]);

  const update = (key, value) => {
    setData(prev => ({ ...prev, [key]: value }));
  };

  const [message, setMessage] = useState("");
  const handleSave = () => {
    onSave(data);
    setMessage("Success! Your profile has been updated.");
    setTimeout(() => setMessage(""), 3000);
  };


  return (
    <>
      <div>
        {message && (
          <div className="fixed top-4 left-1/2 -translate-x-1/2 max-md:w-fit
    bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg z-50">
            {message}
          </div>
        )}

      </div>
      <div className="flex gap-x-6 max-md:flex-col">
        <div className="w-[300px] h-[600px] 
        max-md:h-fit max-md:w-full 
        bg-gray-200 dark:bg-gray-900 p-6 rounded-lg 
          flex flex-col items-center gap-y-3">
          <div className="flex md:flex-col items-center justify-between w-full my-2">
            <AvatarUploader
              value={data.picture}
              onChange={(img) => update("picture", img)}
            />

            <div className="flex flex-col md:items-start md:self-start my-2  gap-y-3">
              <h2 className="text-sm md:text-2xl">{profile.name}</h2>
              <h3 className="text-xs md:text-sm">Product manager</h3>
            </div>
          </div>
          <div className="max-md:hidden border border-gray-300 dark:border-gray-600 w-full"></div>

          <div className="w-full flex-col flex gap-y-3 col-span-2 my-2">
            <div className="text-xs flex justify-between w-full gap-x-4">
              <span>Workload</span>
              <span>74%</span>
            </div>
            <div className="w-full bg-white h-1.5 rounded-full shadow-2xl">
              <div className="w-[74%] bg-indigo-800 rounded-full h-1.5 shadow-2xl"></div>
            </div>
          </div>

          <div className="md:text-left w-full flex md:flex-col col-span-3 max-md:items-center justify-between my-2">
            <h3 className="text-base text-gray-900 dark:text-gray-200 w-fit">Description</h3>
            <p className="text-xs text-gray-800 dark:text-gray-300 w-fit h-fit">
              {profile.description || "No description provided."}
            </p>
          </div>

        </div>
        <div className="bg-gray-200 dark:bg-gray-900 w-full p-4 rounded-xl max-md:mt-2">
          <div className="mt-4 grid grid-cols-2 gap-3">
            {/* Name */}
            <div className="flex flex-col gap-1">
              <label className="text-gray-800 dark:text-gray-300 text-sm">Name</label>
              <input
                type="text"
                className="p-2 rounded bg-gray-300 dark:bg-gray-800 border"
                value={data.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Full Name"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1">
              <label className="text-gray-800 dark:text-gray-300 text-sm">Phone</label>
              <input
                type="tel"
                className="p-2 rounded bg-gray-300 dark:bg-gray-800 border"
                value={data.phone}
                onChange={(e) => update("phone", e.target.value)}
                placeholder="Phone Number"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-gray-800 dark:text-gray-300 text-sm">Email</label>
              <input
                type="email"
                className="p-2 rounded bg-gray-300 dark:bg-gray-800 border"
                value={data.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="Email"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1">
              <label className="text-gray-800 dark:text-gray-300 text-sm">Password</label>
              <input
                type="password"
                className="p-2 rounded bg-gray-300 dark:bg-gray-800 border"
                value={data.password || ""}
                onChange={(e) => update("password", e.target.value)}
                placeholder="Password"
              />
            </div>

            {/* Address */}
            <div className="flex flex-col gap-1 col-span-2">
              <label className="text-gray-800 dark:text-gray-300 text-sm">Address</label>
              <input
                type="text"
                className="p-2 rounded bg-gray-300 dark:bg-gray-800 border"
                value={data.address || ""}
                onChange={(e) => update("address", e.target.value)}
                placeholder="Street Address"
              />
            </div>

            <div className="w-full col-span-2 grid grid-cols-3 gap-x-3">
              {/* City */}
              <div className="flex flex-col gap-1">
                <label className="text-gray-800 dark:text-gray-300 text-sm">City</label>
                <input
                  type="text"
                  className="p-2 rounded bg-gray-300 dark:bg-gray-800 border"
                  value={data.city || ""}
                  onChange={(e) => update("city", e.target.value)}
                  placeholder="City"
                />
              </div>

              {/* State */}
              <div className="flex flex-col gap-1">
                <label className="text-gray-800 dark:text-gray-300 text-sm">State</label>
                <input
                  type="text"
                  className="p-2 rounded bg-gray-300 dark:bg-gray-800 border"
                  value={data.state || ""}
                  onChange={(e) => update("state", e.target.value)}
                  placeholder="State / Province"
                />
              </div>

              {/* ZIP */}
              <div className="flex flex-col gap-1">
                <label className="text-gray-800 dark:text-gray-300 text-sm">ZIP</label>
                <input
                  type="number"
                  className="p-2 rounded bg-gray-300 dark:bg-gray-800 border"
                  value={data.zip || ""}
                  onChange={(e) => update("zip", e.target.value)}
                  placeholder="ZIP Code"
                />
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-1 col-span-2">
              <label className="text-gray-800 dark:text-gray-300 text-sm">Description</label>
              <textarea
                className="p-2 rounded bg-gray-300 dark:bg-gray-800 border h-24 resize-none"
                value={data.description || ""}
                onChange={(e) => update("description", e.target.value)}
                placeholder="Short bio or description"
              />
            </div>
          </div>

          <div className="flex items-start justify-start mt-5">
            <button
              onClick={handleSave}
              className="cursor-pointer bg-indigo-800 px-4 py-2 rounded-xl self-start
               text-gray-200 w-fit text-center"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
