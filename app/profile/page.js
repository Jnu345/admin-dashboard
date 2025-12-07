"use client";
import useProfile from "../../hooks/useProfile";
import ProfileForm from "./ProfileForm";

export default function ProfilePage() {
  const { profile, loading, saveProfile, resetProfile } = useProfile();

  if (loading) return <p className="p-4">Loading profile...</p>;

  return (
    <div className="p-8 h-full">
      <h1 className="text-2xl font-bold mb-6">Profile</h1>

      <ProfileForm
        profile={profile}
        onSave={saveProfile}
        onReset={resetProfile}
      />
    </div>
  );
}
