"use client"; // This is a client component 👈🏽
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Tab({
  activeTab = "unista",
  onTabClick,
  children,
}: {
  activeTab?: string;
  onTabClick?: () => void;
  children?: React.ReactNode;
}): JSX.Element {
  const router:any = useRouter();

  useEffect(() => {
    const init = async () => {
      const { initTE, Tab } = await import("tw-elements");
      initTE({ Tab });
    };
    init();
  }, []);
  return (
    <>
      <div className="hidden md:block lg:block xl:block">
        <ul className="w-full px-6 flex flex-row items-center justify-between h-20 bg-BeautyDarkPurple rounded-tl-2xl rounded-tr-2xl rounded-bl-none rounded-br-none">
          <li
            className={`cursor-pointer font-LotaRegular hover:text-BeautyDeepGrey text-xl relative portfolio-item ${
              activeTab === "unista"
                ? "after:block after:content-[''] after:w-full after:h-1 after:absolute after:bottom-[-100%] after:left-0 after:bg-BeautyDeepGrey after:border text-BeautyDeepGrey after:border-BeautyDeepGrey after:ease-in-out after:duration-300"
                : ""
            } `}
            onClick={() => router.push("/portfolio/development/unista",{ shallow: true })}
          >
            Unista
          </li>
          <li
            className={`cursor-pointer font-LotaRegular hover:text-BeautyDeepGrey text-xl relative portfolio-item ${
              activeTab === "uplands"
                ? "after:block after:content-[''] after:w-full after:h-1 after:absolute after:bottom-[-100%] after:left-0 after:bg-BeautyDeepGrey after:border text-BeautyDeepGrey after:border-BeautyDeepGrey after:ease-in-out after:duration-300"
                : ""
            } `}
            onClick={() => router.push("/portfolio/development/uplands",{ shallow: true })}
          >
            Uplands Hunt
          </li>
          <li
            className={`cursor-pointer font-LotaRegular hover:text-BeautyDeepGrey text-xl relative portfolio-item ${
              activeTab === "woodcore"
                ? "after:block after:content-[''] after:w-full after:h-1 after:absolute after:bottom-[-100%] after:left-0 after:bg-BeautyDeepGrey after:border text-BeautyDeepGrey after:border-BeautyDeepGrey after:ease-in-out after:duration-300"
                : ""
            } `}
            onClick={() => router.push("/portfolio/development/woodcore",{ shallow: true })}
          >
            Woodcore
          </li>
          <li
            className={`cursor-pointer font-LotaRegular hover:text-BeautyDeepGrey text-xl relative portfolio-item ${
              activeTab === "quba"
                ? "after:block after:content-[''] after:w-full after:h-1 after:absolute after:bottom-[-100%] after:left-0 after:bg-BeautyDeepGrey after:border text-BeautyDeepGrey after:border-BeautyDeepGrey after:ease-in-out after:duration-300"
                : ""
            }`}
            onClick={() => router.push("/portfolio/development/quba",{ shallow: true })}
          >
            Quba
          </li>
        </ul>
      </div>

      <div className="block md:hidden lg:hidden xl:hidden">
        <ul className="list-unstyled bg-BeautyDarkPurple rounded-2xl h-auto py-5 px-5">
          <li className={`cursor-pointer font-LotaRegular hover:text-BeautyDeepGrey text-base relative py-2 ${
              activeTab === "unista"
                ? "before:block before:content-[''] before:h-5 before:absolute before:left-[-6.4%] before:bg-BeautyDeepGrey before:border text-BeautyDeepGrey before:border-BeautyDeepGrey before:ease-in-out before:duration-300 pl-1"
                : "pl-1"
            } `}  onClick={() => router.push("/portfolio/development/unista",{ shallow: true })}>
          Unista
          </li>
          <li className={`cursor-pointer font-LotaRegular hover:text-BeautyDeepGrey text-base relative py-2 ${
              activeTab === "uplands"
                ? "before:block before:content-[''] before:h-5 before:absolute before:left-[-6.4%] before:bg-BeautyDeepGrey before:border text-BeautyDeepGrey before:border-BeautyDeepGrey before:ease-in-out before:duration-300 pl-1"
                : "pl-1"
            } `} onClick={() => router.push("/portfolio/development/uplands",{ shallow: true })}>
            Uplands Hunt
          </li>
          <li className={`cursor-pointer font-LotaRegular hover:text-BeautyDeepGrey text-base relative py-2 ${
              activeTab === "woodcore"
                ? "before:block before:content-[''] before:h-5 before:absolute before:left-[-6.4%] before:bg-BeautyDeepGrey before:border text-BeautyDeepGrey before:border-BeautyDeepGrey before:ease-in-out before:duration-300 pl-1"
                : "pl-1"
            } `} onClick={() => router.push("/portfolio/development/woodcore",{ shallow: true })}>
            Woodcore
          </li>
          <li className={`cursor-pointer font-LotaRegular hover:text-BeautyDeepGrey text-base relative py-2 ${
              activeTab === "quba"
                ? "before:block before:content-[''] before:h-5 before:absolute before:left-[-6.4%] before:bg-BeautyDeepGrey before:border text-BeautyDeepGrey before:border-BeautyDeepGrey before:ease-in-out before:duration-300 pl-1"
                : "pl-1"
            } `}  onClick={() => router.push("/portfolio/development/quba", { shallow: true })}>
            Quba
          </li>
        </ul>
      </div>

      <div className="mb-6">{children}</div>
    </>
  );
}

export default Tab;
