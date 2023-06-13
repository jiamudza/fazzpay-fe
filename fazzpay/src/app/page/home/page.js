"use client";
import FooterAfterLogin from "@/app/components/FooterAfterLogin";
import HeaderAfterLogin from "@/app/components/HeaderAfterLogin";
import MainMenu from "@/app/components/MainMenu";
import { usePathname } from "next/navigation";

//icons
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

export default function Home() {
  const pathname = usePathname();

  // const {keyword} = router.query;
  console.log(pathname);
  return (
    <div className="bg-[#e5e5e5]">
      <header className="px-10 py-6 bg-white">
        <HeaderAfterLogin />
      </header>
      <main className="flex mb-10">
        <div className="bg-white mx-10 px-10 py-5 rounded-xl shadow-xl my-10 w-72">
          <MainMenu />
        </div>
        <div id="content" className="w-full mt-10 mx-10">
          <div className="text-white bg-primary p-5 rounded-xl flex justify-between items-center">
            <div>
              <p>Balance</p>
              <h3 className="text-bold text-2xl">Rp120.000</h3>
              <p className="text-sm">+62 896 0108 5905</p>
            </div>

            <div>
              <button className=" bg-slate-200 w-32 bg-opacity-60 outline outline-white rounded-lg flex justify-between gap-2 py-2 px-3 outline-1 hover:bg-blue-300 active:scale-95 duration-200 ease-in-out">
                <AiOutlineArrowUp size={25} className="text-slate-500" />
                <p className="font-bold">Transfer</p>
              </button>
              <button className=" bg-slate-200 w-32 bg-opacity-60 outline outline-white rounded-lg flex justify-between gap-2 py-2 px-3 outline-1 hover:bg-blue-300 active:scale-95 duration-200 ease-in-out mt-5">
                <AiOutlinePlus size={25} className="text-slate-500" />
                <p className="font-bold">Top Up</p>
              </button>
            </div>
          </div>

          <div className="flex justify-between mt-10 gap-10">
            {/* traffic */}
          <div className="bg-white shadow-xl rounded-xl p-10  text-center flex-1">
            <div className="flex items-center justify-between">
              <div>
                <AiOutlineArrowDown
                  size={20}
                  className="text-green-600 mx-auto"
                />
                <p>Income</p>
                <p className="font-bold text-xl">Rp2.200.000</p>
              </div>
              <div>
                <AiOutlineArrowUp size={20} className="text-red-600 mx-auto" />
                <p>Expense</p>
                <p className="font-bold text-xl">Rp2.200.000</p>
              </div>
            </div>

            <div className="h-40">Traffic</div>
          </div>
            
            {/* history */}
          <div className="px-10 bg-white rounded-xl shadow-xl p-10 h-80 overflow-y-auto">
            <div className="flex gap-20 items-center justify-between ">
                <p className=" font-bold">Transaction History</p>
                <p className="text-small text-primary border-primary border-b py-1 px-2">see all</p>
            </div>

            <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-primary rounded-lg mt-5"></div>
                <div>
                    <p>Samuel Suhi</p>
                    <p className="text-sm text-slate-400">+62 896 0108 5905</p>
                </div>
                <p className="font-bold text-green-500">+Rp50.000</p>
            </div>
            <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-primary rounded-lg mt-5"></div>
                <div>
                    <p>Samuel Suhi</p>
                    <p className="text-sm text-slate-400">+62 896 0108 5905</p>
                </div>
                <p className="font-bold text-green-500">+Rp50.000</p>
            </div>
            <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-primary rounded-lg mt-5"></div>
                <div>
                    <p>Samuel Suhi</p>
                    <p className="text-sm text-slate-400">+62 896 0108 5905</p>
                </div>
                <p className="font-bold text-green-500">+Rp50.000</p>
            </div>
            <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-primary rounded-lg mt-5"></div>
                <div>
                    <p>Samuel Suhi</p>
                    <p className="text-sm text-slate-400">+62 896 0108 5905</p>
                </div>
                <p className="font-bold text-green-500">+Rp50.000</p>
            </div>
            <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-primary rounded-lg mt-5"></div>
                <div>
                    <p>Samuel Suhi</p>
                    <p className="text-sm text-slate-400">+62 896 0108 5905</p>
                </div>
                <p className="font-bold text-green-500">+Rp50.000</p>
            </div>
            <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-primary rounded-lg mt-5"></div>
                <div>
                    <p>Samuel Suhi</p>
                    <p className="text-sm text-slate-400">+62 896 0108 5905</p>
                </div>
                <p className="font-bold text-green-500">+Rp50.000</p>
            </div>
            <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-primary rounded-lg mt-5"></div>
                <div>
                    <p>Samuel Suhi</p>
                    <p className="text-sm text-slate-400">+62 896 0108 5905</p>
                </div>
                <p className="font-bold text-green-500">+Rp50.000</p>
            </div>
            <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-primary rounded-lg mt-5"></div>
                <div>
                    <p>Samuel Suhi</p>
                    <p className="text-sm text-slate-400">+62 896 0108 5905</p>
                </div>
                <p className="font-bold text-green-500">+Rp50.000</p>
            </div>
            <div className="flex items-center justify-between">
                <div className="w-10 h-10 bg-primary rounded-lg mt-5"></div>
                <div>
                    <p>Samuel Suhi</p>
                    <p className="text-sm text-slate-400">+62 896 0108 5905</p>
                </div>
                <p className="font-bold text-green-500">+Rp50.000</p>
            </div>
           
          </div>
          </div>
        </div>
      </main>

      <FooterAfterLogin />
    </div>
  );
}
