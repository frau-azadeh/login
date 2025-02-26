"use client"
import { useState } from "react";
import SignupForm from "@/components/SignupForm";

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <button
        onClick={() => setShowForm(true)}
        className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        ثبت‌نام
      </button>

      {showForm && <SignupForm onClose={() => setShowForm(false)} />}
    </div>
  );
}
