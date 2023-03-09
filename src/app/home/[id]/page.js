"use client"
import { Footer } from "@/app/components/Footer";
import BalanceCard from "../../components/BalanceCard";
import Header from "../../components/Header";
import HistoryCard from "../../components/HistoryCard";
import NavCard from "../../components/NavCard";
import StatCard from "../../components/StatCard";

import { usePathname, useRouter } from "next/navigation";

// import { useRouter } from "next/router";

export default function Home() {
  const segment = usePathname();
  const id = segment.split("/")[2];
  console.log(id)
  // const router = useRouter()
  // const {id} = router.query;
  return (
    <body>
        <Header />
        <main className="mt-10 px-20 flex">
            <NavCard />

            <section className="flex-1 ml-20">
                <BalanceCard />

                <div className="flex">
                    <StatCard />
                    <HistoryCard />

                </div>
            </section>
        </main>
        <Footer />
    </body>
  )
}
