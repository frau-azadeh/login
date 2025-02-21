"use client";

import { authApi } from "@/lib/axiosInstance";
import { useEffect, useState } from "react";
import { User } from "@/types/user";

export default function HomePage () {
  const [userLogin, setUserLogin] = useState<User[]>([]);

  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const response = await authApi.get<User[]>('/login');
        setUserLogin(response.data);

      }catch(error){
        console.error('fail', error);
      }
    }
    fetchData();
  },[]);

  return(
    <div>
      <ul>
        {userLogin.map((user)=>(
          <li key={user.id}>
            <p>{user.fullName}</p>
            <p>{user.role}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}