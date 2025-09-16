"use client";

import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";

export default function HomePage() {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUserEmail(session?.user.email ?? null);
    };

    getUser();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login"; // بعد از خروج، برگرد به صفحه ورود
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold mb-4">سلام، تست اتصال Supabase!</h2>

      {userEmail ? (
        <>
          <p className="mb-4">
            کاربر لاگین شده: <strong>{userEmail}</strong>
          </p>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
          >
            خروج از حساب
          </button>
        </>
      ) : (
        <p>در حال بررسی وضعیت ورود...</p>
      )}
    </div>
  );
}
