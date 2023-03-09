"use client"
// import { useRouter } from "next/router";
import { usePathname, useRouter } from "next/navigation";


import Link from "next/link"

export default function NavCard() {
    const segment = usePathname();
    const id = segment.split("/")[2];
    // const router = useRouter();
    // const {id} = router.query;

    // console.log(id)

    
  return (
    <div className="text-slate-500 w-[20vw] bg-white shadow-xl font-semibold flex flex-col px-20">
        <ul className="h-full py-10">
            <li>
                <Link className="block mb-3" href={(`/home/${id}`)}>Dashboard</Link>
                <Link className="block mb-3" href={(`/transfer/${id}`)}>transfer</Link>
                <Link className="block mb-3" href={(`/topup/${id}`)}>Top Up</Link>
                <Link className="block mb-3" href={(`/profile/${id}`)}>Profile</Link>
            </li>

            <button onClick={() => {
                  localStorage.removeItem("@company");
                  localStorage.removeItem("@userLogin");
                  localStorage.removeItem("@id");
                  
                //   setIsLogin(false);
                }}
               className="mt-[20vh]">Logout</button>
        </ul>
    </div>
  )
}
