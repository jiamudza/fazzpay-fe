// Assets
import phoneImage from "../assets/img/png-phone.png";
import phoneImage2 from "../assets/img/png-phone2.png";
import airbnb from "../assets/icon/logo/airbnb.png";
import microsoft from "../assets/icon/logo/microsoft.png";
import hnm from "../assets/icon/logo/hnm.png";
import canon from "../assets/icon/logo/canon.png";
import dell from "../assets/icon/logo/dell.png";
import dropbox from "../assets/icon/logo/dropbox.png";

// Utility
import Image from "next/image";
import { AiOutlinePhone } from "react-icons/ai";
import { FiLock } from "react-icons/fi";
import { TbDownload } from "react-icons/tb";

// Component
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function page() {
  return (
    <div className="mb-10">
      <header className="px-10 py-6 bg-white">
        <Header />
      </header>

      {/* //////////////////JUMBOTRON///////////////////// */}
      <div className="block lg:flex justify-items-start lg:px-32">
        <Image alt="phone" src={phoneImage} className="" />
        <aside className="mt-20 text-center lg:text-start">
          <h1 className="font-extrabold text-5xl leading-normal">
            Awesome App <br /> For Saving{" "}
            <span className="text-primary">Time.</span>
          </h1>
          <p className="mt-20 text-sm leading-loose">
            We bring you a mobile app for banking problems that <br></br>{" "}
            oftenly wasting much of your times.
          </p>
          <button className="button-primary mt-10">Try it free</button>
          <p className="text-sm mt-5">Available on:</p>
        </aside>
      </div>

      {/* Company LOGO */}
      <div className=" bg-indigo-400 opacity-6">
        <div className="p-5 flex flex-wrap justify-between">
          <Image alt="microsoft" src={microsoft} className="object-contain" />
          <Image alt="dropbox" src={dropbox} className="object-contain" />
          <Image alt="hnm" src={hnm} className="object-contain" />
          <Image alt="airbnb" src={airbnb} className="object-contain" />
          <Image alt="canon" src={canon} className="object-contain" />
          <Image alt="dell" src={dell} className="object-contain" />
        </div>
      </div>

      {/* APP explanation */}
      <main className="text-center mt-10 bg-white">
        <p className="font-extrabold text-5xl">
          <span className="text-primary">About</span> the Application.
        </p>
        <p className="mt-10 text-sm text-slate-600">
          We have some great features from the application and it’s totally free{" "}
          <br /> to use by all users around the world.
        </p>

        {/* Card */}
        <div className="mt-10 block mx-auto lg:flex mb-20">
          <div className="flex flex-col items-center justify-center mt-5 lg:w-[33.3vw] px-5 mx-3">
            <AiOutlinePhone
              size={"40"}
              className="text-primary font-bold rounded-full p-2 bg-slate-200 "
            />
            <p className="font-bold mt-2">24/7 Support</p>
            <p className="text-slate-400 mt-2">
              We have 24/7 contact support so you can contact us whenever you
              want and we will respond it.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-5 lg:w-[33.3vw] px-5 mx-3">
            <FiLock
              size={"40"}
              className="text-primary font-bold rounded-full p-2 bg-slate-200 "
            />
            <p className="font-bold mt-2">Data Privacy</p>
            <p className="text-slate-400 mt-2">
              We make sure your data is safe in our database and we will encrypt
              any data you submitted to us.{" "}
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-5 lg:w-[33.3vw] px-5 mx-3">
            <TbDownload
              size={"40"}
              className="text-primary font-bold rounded-full p-2 bg-slate-200 "
            />
            <p className="font-bold mt-2">Easy Download</p>
            <p className="text-slate-400 mt-2">
              Zwallet is 100% totally free to use it’s now available on Google
              Play Store and App Store.{" "}
            </p>
          </div>
        </div>

        {/* ########Main Part 2####################### */}

        <div className="mx-auto block lg:flex lg:text-start lg:px-24 bg-slate-100">
          <Image
          alt="phone-2"
            src={phoneImage2}
            className="object-contain mx-auto"
            sizes="40"
          />
          <div className="mt-5 lg:mt-20">
            <h1 className="font-bold text-5xl">
              All The <span className="text-primary">Great</span>
              <br />
              FazzPay Features.
            </h1>

            {/* point card */}
            <div className="mt-5 lg:mt-10 rounded-xl text-xl mx-5">
              <div className="py-5 px-2 bg-white rounded-xl shadow-xl mt-5">
                <span className="font-bold text-primary">1. </span>
                <span className="font-bold mt-2">Small Fee</span>
                <p className="mt-5">
                  We only charge 5% of every success transaction done in FazzPay
                  app.
                </p>
              </div>

              <div className="py-5 px-2 bg-white rounded-xl shadow-xl mt-5">
                <span className="font-bold text-primary">2. </span>
                <span className="font-bold mt-2">Data Secured</span>
                <p className="mt-5">
                  All your data is secured properly in our system and it’s
                  encrypted.
                </p>
              </div>
              <div className="py-5 px-2 bg-white rounded-xl shadow-xl mt-5">
                <span className="font-bold text-primary">3. </span>
                <span className="font-bold mt-2">User Friendly</span>
                <p className="mt-5">
                  FazzPay come up with modern and sleek design and not
                  complicated.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ####Main Part 3###### */}
        <div className="mt-10">
          <h1 className="font-bold text-5xl">
            What Users are <span className="text-primary">Saying</span>
          </h1>
          <p className="text-slate-600 mt-5">
            We have some great features from the application and it’s totally
            free
            <br /> to use by all users around the world.
          </p>
        {/* ####USER#### */}
          <div className="mx-20 rounded-xl shadow-xl mt-10 py-10">
             <div className="w-20 h-20 bg-primary rounded-lg mx-auto">

             </div>
             <p className="text-xl font-bold mt-5">Alex Hansinburg</p>
             <p className="mt-5 text-slate-600">Designer</p>
             <p className="text-slate-600 mt-5">“This is the most outstanding app that I’ve ever try in my live, this app is such an amazing masterpiece and it’s suitable for you who is bussy with their bussiness and must transfer money to another person aut there. Just try this app and see the power!”</p>
          </div>

        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
