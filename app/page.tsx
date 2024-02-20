// import Login from "./login/page";

import { Button } from "antd";
import Link from "next/link";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center p-[50px]">
      <h1 className="text-4xl text-center mb-8 ">Welcome to My Next.js App</h1>
      <Button className="bg-[#5cdbd3] p-[10px] px-[30px] h-auto"><Link href={"/login"} >
        Login
      </Link></Button>

    </div>
  );
}
