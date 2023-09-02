"use client"; // This is a client component 👈🏽
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation'


function Tab({
  activeTab = "unista",
  onTabClick,
  children,
}: {
  activeTab?: string;
  onTabClick?: () => void;
  children?: React.ReactNode;
}): JSX.Element {
  const router = useRouter()

  useEffect(() => {
    const init = async () => {
      const { initTE, Tab } = await import("tw-elements");
      initTE({ Tab });
    };
    init();
  }, []);
  return (
    <>
      <ul
        className="mb-5 flex list-none flex-row flex-wrap border-b-0  rounded-tl-[15px] rounded-tr-[15px] bg-BeautyDarkPurple"
        role="tablist"
        data-te-nav-ref
      >
        <li role="presentation" className="flex-grow basis-0 text-center" onClick={() => router.push('/portfolio/development/unista')}>
          <Link
            href="/portfolio/development/unista"
            className={`my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 font-medium capitalize leading-tight font-LotaRegular text-xl text-white ${
              activeTab === "unista"
                ? "hover:isolate hover:border-BeautyDeepGrey hover:bg-white focus:isolate focus:border-BeautyDeepGrey data-[te-nav-active]:border-BeautyDeepGrey data-[te-nav-active]:text-white dark:text-white dark:hover:border-BeautyDeepGrey dark:data-[te-nav-active]:border-BeautyDeepGrey dark:data-[te-nav-active]:text-white"
                : ""
            }`}
            data-te-toggle="pill"
            // data-te-target="#tabs-home02"
            data-te-nav-active={activeTab === "unista" ? true : false}
            role="tab"
            aria-controls="tabs-home02"
            aria-selected="true"
          >
            Unista
          </Link>
        </li>
        <li role="presentation" className="flex-grow basis-0 text-center" onClick={() => router.push('/portfolio/development/uplands')}>
          <Link
            href="/portfolio/development/uplands"
            className={`my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 font-medium capitalize leading-tight font-LotaRegular text-xl text-white ${
              activeTab === "uplands"
                ? "hover:isolate hover:border-BeautyDeepGrey hover:bg-white focus:isolate focus:border-BeautyDeepGrey data-[te-nav-active]:border-BeautyDeepGrey data-[te-nav-active]:text-white dark:text-white dark:hover:border-BeautyDeepGrey dark:data-[te-nav-active]:border-BeautyDeepGrey dark:data-[te-nav-active]:text-white"
                : ""
            }`}
            data-te-toggle="pill"
            // data-te-target="#tabs-profile02"
            role="tab"
            aria-controls="tabs-profile02"
            aria-selected="false"
            data-te-nav-active={activeTab === "uplands" ? true : false}
          >
            Uplands Hunt
          </Link>
        </li>
        <li role="presentation" className="flex-grow basis-0 text-center" onClick={() => router.push('/portfolio/development/woodcore')}>
          <Link
            href="/portfolio/development/woodcore"
            className={`my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 font-medium capitalize leading-tight font-LotaRegular text-xl text-white ${
              activeTab === "woodcore"
                ? "hover:isolate hover:border-BeautyDeepGrey hover:bg-white focus:isolate focus:border-BeautyDeepGrey data-[te-nav-active]:border-BeautyDeepGrey data-[te-nav-active]:text-white dark:text-white dark:hover:border-BeautyDeepGrey dark:data-[te-nav-active]:border-BeautyDeepGrey dark:data-[te-nav-active]:text-white"
                : ""
            }`}
            data-te-toggle="pill"
            // data-te-target="#tabs-messages02"
            role="tab"
            aria-controls="tabs-messages02"
            aria-selected="false"
            data-te-nav-active={activeTab === "woodcore" ? true : false}
          >
            Woodcore
          </Link>
        </li>
        <li role="presentation" className="flex-grow basis-0 text-center" onClick={() => router.push('/portfolio/development/quba')}>
          <Link
            href="/portfolio/development/quba"
            className={`my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 font-medium capitalize leading-tight font-LotaRegular text-xl text-white ${
              activeTab === "quba"
                ? "hover:isolate hover:border-BeautyDeepGrey hover:bg-white focus:isolate focus:border-BeautyDeepGrey data-[te-nav-active]:border-BeautyDeepGrey data-[te-nav-active]:text-white dark:text-white dark:hover:border-BeautyDeepGrey dark:data-[te-nav-active]:border-BeautyDeepGrey dark:data-[te-nav-active]:text-white"
                : ""
            }`}
            passHref={true}
            data-te-toggle="pill"
            // data-te-target="#tabs-messages03"
            role="tab"
            aria-controls="tabs-messages03"
            aria-selected="false"
            data-te-nav-active={activeTab === "quba" ? true : false}
          >
            Quba
          </Link>
        </li>
      </ul>

      <div className="mb-6">{children}</div>
    </>
  );
}

export default Tab;
