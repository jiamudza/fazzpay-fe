import HeaderLogin from "@/components/header/HeaderLogin";
import phone from "../assets/img/png-phone.png";
import Image from "next/image";

export default function page() {
  return (
    <div className="mt-10">
      <header className="w-full">
        <HeaderLogin />
      </header>

      {/* //////////////////JUMBOTRON///////////////////// */}
      <div className="flex justify-items-start lg:px-32">
        <Image src={phone} className="" />
        <aside className="mt-20">
          <h1 className="font-extrabold text-5xl leading-normal">
            Awesome App <br /> For Saving{" "}
            <span className="text-primary">Time.</span>
          </h1>
          <p className="mt-20 text-sm leading-loose">
            We bring you a mobile app for banking problems that <br></br> oftenly wasting
            much of your times.
          </p>
          <button className="button-primary mt-10">
            Try it free
          </button>
          <p className="text-sm mt-5">Available on:</p>
          <div>
            <Image src />
          </div>
        </aside>
      </div>
    </div>
  );
}
