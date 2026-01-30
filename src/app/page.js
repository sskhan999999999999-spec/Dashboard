import Image from "next/image";
import Login from "./Login/page";
import { redirect } from "next/navigation";

export default function Home() {
      
       redirect("/Login")
  
}
