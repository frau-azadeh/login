"use client";

import { useQuery } from "@tanstack/react-query";
import { authApi } from "@/lib/axiosInstance";
import { User } from "@/types/user";

export default function HomePage() {
  const { data: users, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await authApi.get<User[]>("/login");
      return response.data;
    },
  });

  if (isLoading) return <p>در حال دریافت اطلاعات...</p>;
  if (error) return <p>خطایی رخ داد: {String(error)}</p>;

  return (
    <div>
      <h1>لیست کاربران</h1>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            <p>نام: {user.fullName}</p>
            <p>نقش: {user.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
