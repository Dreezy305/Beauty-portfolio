"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Harmburger from "../icons/harmburger";
import { ChevronRight } from "tabler-icons-react";
import { useRouter } from "next/navigation";

export default function Header({
  type,
  active,
}: {
  type: string;
  active?: string;
}): JSX.Element {
  const router = useRouter();
  const closeButtonRef = useRef<any>(null);
  const data = [
    { name: "portfolio", to: "/portfolio", id: "1" },
    { name: "about", to: "/about", id: "2" },
    { name: "know more", to: "/knowmore", id: "3" },
  ];
  useEffect(() => {
    const init = async () => {
      const { Offcanvas, Ripple, initTE } = await import("tw-elements");
      initTE({ Ripple, Offcanvas });
    };
    init();
  }, []);
  return (
    <header className="overflow-hidden">
      <nav
        className={`md:container md:mx-auto lg:container lg:mx-auto xl:container xl:mx-auto relative py-7 flex flex-row items-center justify-between px-5 md:px-5 lg:px-5 xl:px-5 lg:hidden xl:hidden`}
      >
        <Link href="/">
          <Image
            src={"/Layer2.svg"}
            alt="layer"
            width={100}
            height={24}
            priority
          />
        </Link>

        <Harmburger />
      </nav>

      <nav className="container mx-auto relative hidden md:hidden lg:flex lg:flex-row lg:items-center lg:justify-between xl:flex xl:flex-row xl:items-center xl:justify-between py-7 px-0 md:px-5 lg:px-0 xl:px-0">
        <div className="w-5/6 flex flex-row justify-between items-center">
          <Link href="/">
            <Image
              src={"/Layer2.svg"}
              alt="layer"
              width={100}
              height={24}
              priority
            />
          </Link>

          {type === "main" && (
            <div className="hidden md:hidden lg:flex lg:flex-row lg:space-x-20  xl:flex xl:flex-row xl:space-x-20">
              {data.map((i, index: any) => {
                return (
                  <>
                    {" "}
                    <Link
                      href={i.to}
                      key={i.id + index}
                      className={`capitalize font-SofiaMedium font-medium text-base leading-5 cursor-pointer ${
                        active === i.name
                          ? "text-BeautyDeepGrey"
                          : "text-BeautyWhite"
                      }`}
                    >
                      {i.name}
                    </Link>
                  </>
                );
              })}
            </div>
          )}
        </div>

        {type === "main" && (
          <div className="hidden md:hidden lg:block xl:block">
            <Link
              href="/hire"
              className="text-center font-SofiaMedium font-medium text-base cursor-pointer bg-BeautyWhite rounded-tl-[15px] rounded-tf-[5px] rounded-br-[15px] rounded-bl-[5px] pt-[10px] pr-[16px] pb-[10px] pl-[16px]  text-BeautyBlack"
            >
              Hire Me
            </Link>
          </div>
        )}
      </nav>

      <div
        className="invisible fixed bottom-0 right-0 top-0 z-[1045] flex w-96 max-w-full translate-x-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out dark:bg-BeautyBlack dark:text-neutral-200 [&[data-te-offcanvas-show]]:transform-none"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        data-te-offcanvas-init
      >
        <div className="flex items-center justify-between p-4">
          <Image
            src={"/logoempty.svg"}
            alt="layer"
            width={24}
            height={24}
            priority
            onClick={() => {
              router.push(`/`);
              closeButtonRef?.current?.click();
            }}
          />
          <button
            type="button"
            className="box-content rounded-none border-none opacity-50 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            data-te-offcanvas-dismiss
            ref={closeButtonRef}
          >
            <span className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#fff"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className="offcanvas-body flex-grow overflow-y-auto overflow-x-hidden p-4">
          <ul className="w-96">
            {data.map((i: any, index: any) => {
              return (
                <>
                  <li
                    className="w-11/12 py-4 dark:border-opacity-50 flex flex-row items-center justify-between font-SofiaRegular font-normal text-base capitalize text-white"
                    key={index}
                    onClick={() => {
                      router.push(`${i.to}`);
                      closeButtonRef?.current?.click();
                    }}
                  >
                    {i.name}{" "}
                    <ChevronRight
                      size={24}
                      strokeWidth={2}
                      color={"#fff"}
                      className="float-right"
                    />
                  </li>
                </>
              );
            })}

            <li className="w-11/12  py-4 dark:border-opacity-50 flex flex-row items-center justify-between font-SofiaRegular font-normal text-base">
              Resume (PDF){" "}
              <ChevronRight
                size={24}
                strokeWidth={2}
                color={"#fff"}
                className="float-right"
              />
            </li>

            <button
              type="button"
              className="w-11/12 text-center font-SofiaMedium font-medium text-base cursor-pointer bg-BeautyWhite rounded-tl-[15px] rounded-tf-[5px] rounded-br-[15px] rounded-bl-[5px] pt-[10px] pr-[16px] pb-[10px] pl-[16px]  text-BeautyBlack"
              onClick={() => {
                router.push("/hire");
                closeButtonRef?.current?.click();
              }}
            >
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </header>
  );
}
