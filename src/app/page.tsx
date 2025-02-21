import { authApi } from "@/lib/axiosInstance";
import { User } from "@/types/user"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [userLogin, setUserLogin] = useState<User[]>([]);

  useEffect(()=>{
    const fetchDate = async () => {
      try{
        const response = await authApi.get<User[]>("/login");
        setUserLogin(response.data);
      }catch(error){
        console.error('fail', error);
      }
    }
    fetchDate();
  }, []);

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