"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Button from "@/components/ui/Button";

export default function DashboardPage() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        router.replace("/login");
      } else {
        setLoading(false);
      }
    };

    checkSession();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  if (loading) {
    return <p className="text-center mt-10">در حال بارگذاری...</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-2xl font-bold">داشبورد خصوصی</h1>
      <p className="text-gray-600">
        فقط کاربران وارد شده می‌تونن اینجا رو ببینن.
      </p>

      <Button onClick={handleLogout} className="mt-6" variant="exit">
        خروج از حساب
      </Button>
    </div>
  );
}
