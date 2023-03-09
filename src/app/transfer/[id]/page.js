import { Footer } from "@/app/components/Footer";
import Header from "@/app/components/Header";
import NavCard from "@/app/components/NavCard";
import Receiver from "@/app/components/Receiver";

export default function page() {
  return (
    <>
      <Header />
      
      <main className="mt-10 px-20 flex">
            <NavCard />

            <section className="flex-1 ml-20">
                
                <Receiver />
            </section>
        </main>
        <Footer />
    </>
  )
}
