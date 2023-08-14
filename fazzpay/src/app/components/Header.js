"use client";
import React, { useEffect, useState } from "react";

import placeholder from "@/assets/img/placeholder.jpg";
import { RiLogoutCircleLine, RiSettings3Fill } from "react-icons/ri";

import { RxDashboard } from "react-icons/rx";
import { RxPerson } from "react-icons/rx";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { VscBell } from "react-icons/vsc";
import axios from "axios";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [hamburgerMenu, setHamburgerMenu] = useState("hamburger-menu");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [user, setUser] = useState({});

  const handleLogout = (e) => {
    e.preventDefault();

    localStorage.removeItem("@fazzLogin");

    setIsLogin(false);
  };

  const [search, setSearch] = useState("");

  useEffect(() => {
    if (localStorage.getItem("@fazzLogin")) {
      const userId = JSON.parse(localStorage.getItem("@fazzLogin")).user
        .user_id;
      setIsLogin(true);
      axios
        .get(`https://fazz.adaptable.app/api/v1/user/${userId}`)
        .then((res) => {
          setUser(res.data.data);
        })
        .catch((err) => console.log(err.response.data));
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <div className="font-nunito bg-white bg-opacity-90">
      <div
        className={
          drawerOpen
            ? "flex blur-sm md:blur-none px-5 md:px-10 items-center justify-between"
            : "flex px-5 md:px-10 items-center justify-between"
        }
      >
        <button
          id={hamburgerMenu}
          onClick={() => {
            setHamburgerMenu("hamburger-menu-active");
            setDrawerOpen(true);
          }}
          className="block lg:hidden"
        >
          <span className="hamburger-line origin-bottom-left bg-text transition ease-in-out duration-300"></span>
          <span className="h-[2.5px] w-5 rounded-lg bg-text block"></span>
          <span className="hamburger-line origin-top-left bg-text transition ease-in-out duration-300"></span>
        </button>

        <Link href="/" className="hidden lg:flex items-center font-bold">
          <p className="font-bold text-2xl text-primary">Fazzpay</p>
        </Link>

        {isLogin ? (
          <div className="flex items-center">
            <div>
              <div className="flex content-center gap-5 justify-between items-center">
                <div className="flex content-center justify-between items-center gap-3">
                  <Image
                    src={
                      user.user_image === null ? placeholder : user.user_image
                    }
                    width={200}
                    height={200}
                    alt="user-image"
                    className="h-10 w-10 rounded-lg bg-primary"
                  />

                  <div>
                    <p className="font-bold">{`${user.first_name} ${user.last_name}`}</p>
                    <p className="text-sm text-slate-400">{user.phone}</p>
                  </div>
                </div>
                <div>
                  <VscBell size={20} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="block">
            <Link
              href="/auth/login"
              className="border bg-primary px-6 py-3 rounded-xl font-semibold text-white hover:bg-white hover:border hover:border-primary ease-in-out duration-100 hover:text-primary mx-2 active:scale-95"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="border border-primary bg-white px-6 py-3 rounded-xl font-semibold text-primary hover:bg-white hover:border hover:border-primary ease-in-out duration-100 hover:text-primary mx-2 active:scale-95"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>

      <div
        id={`drawer-${drawerOpen}`}
        className="blur-none absolute transition-all ease-in-out duration-500 top-0 w-[80vw] h-[100vh] bg-white shadow-2xl lg:hidden"
      >
        {isLogin ? (
          <div className="flex flex-col items-start right-20 top-0 bg-transparent py-0 w-full text-center text-text">
            <div className="bg-primary w-full rounded-r-xl">
              <div
                onClick={() => {
                  setDrawerOpen(!drawerOpen);
                  setHamburgerMenu("hamburger-menu");
                }}
                className=" rounded right-4 absolute py-3 pr-0 pl-3 cursor-pointer"
              >
                <HiOutlineArrowLeft color="white" size={30} />
              </div>
              <div
                onClick={() => router.push("/profile")}
                className="cursor-pointer flex flex-col items-center mx-20 py-5 text-white"
              >
                <Image
                  className="w-28 h-28 rounded-full"
                  src={user.user_image !== null ? user.user_image : placeholder}
                  alt="user-profile"
                />
                <p className="font-bold py-3">
                  {isLogin
                    ? user.first_name + " " + user.last_name
                    : "Anonimous"}
                </p>
                <p>{isLogin ? user.email : "Anonimous"}</p>
              </div>
            </div>

            {/* drawer down */}
            <div
              onClick={() => router.push("/home")}
              className="py-5 px-20 flex items-center justify-arounf cursor-pointer border-b hover:text-primary"
            >
              <RxDashboard size={25} className="text-text mx-3 " />
              <p>Dashboard</p>
            </div>
            <div
              onClick={() => router.push("/transfer")}
              className="py-5 px-20 flex items-center justify-around cursor-pointer border-b hover:text-primary"
            >
              <AiOutlineArrowUp size={25} className="text-text mx-3" />
              <p>Transfer</p>
            </div>
            <div
              onClick={() => {}}
              className="py-5 px-20 flex items-center justify-around cursor-pointer border-b hover:text-primary"
            >
              <AiOutlinePlus size={25} className="text-text mx-3" />
              <p>Topup</p>
            </div>
            <div
              onClick={() => router.push("/profile")}
              className="py-5 px-20 flex items-center justify-around cursor-pointer hover:text-primary"
            >
              <RxPerson size={25} className="text-text mx-3" />
              <p>Profile</p>
            </div>
            <div
              onClick={handleLogout}
              className="py-3 absolute right-2 bottom-10  flex items-center justify-around cursor-pointer hover:text-red-400"
            >
              <RiLogoutCircleLine size={25} className="text-text mx-3" />
              <p>Logout</p>
            </div>
          </div>
        ) : (
          <div>
            <div className=" flex justify-between px-5 items-center w-full rounded-r-xl">
              <Link href="/" className="lg:flex items-center font-bold">
                <p className="font-bold text-2xl text-primary">Fazzpay</p>
              </Link>
              <div
                onClick={() => {
                  setDrawerOpen(!drawerOpen);
                  setHamburgerMenu("hamburger-menu");
                }}
                className="rounded py-4 pr-0 mx-4 cursor-pointer"
              >
                <HiOutlineArrowLeft className="text-primary" size={30} />
              </div>
            </div>

            <div className="w-full cursor-pointer flex justify-center gap-3 px-10 mt-10">
              <Link
                href="/auth/login"
                className="border bg-primary px-6 py-2 rounded-xl font-semibold text-white hover:bg-white hover:border hover:border-primary ease-in-out duration-100 hover:text-primary mx-2 active:scale-95"
              >
                Login
              </Link>
              <Link
                href="/auth/register"
                className="border border-primary bg-white px-6 py-2 rounded-xl font-semibold text-primary hover:bg-white hover:border hover:border-primary ease-in-out duration-100 hover:text-primary mx-2 active:scale-95"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
