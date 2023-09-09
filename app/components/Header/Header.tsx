import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header({
  type,
  active,
}: {
  type: string;
  active?: string;
}): JSX.Element {
  const data = [
    { name: "portfolio", to: "/portfolio", id: "1" },
    { name: "about", to: "/about", id: "2" },
    { name: "know more", to: "/knowmore", id: "3" },
  ];
  return (
    <header className="overflow-hidden">
      {type === "landing" && (
        <nav
          className={`container mx-auto relative py-7 ${(type = "landing"
            ? "px-0 md:px-5 lg:px-5 xl:px-5"
            : "")}`}
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
        </nav>
      )}

      {type === "main" && (
        <nav className="container mx-auto relative flex flex-row items-center justify-between py-7 px-0 md:px-5 lg:px-0 xl:px-0">
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
          </div>

          <div className="hidden md:hidden lg:block xl:block">
            <Link
              href="/hire"
              className="text-center font-SofiaMedium font-medium text-base cursor-pointer bg-BeautyWhite rounded-tl-[15px] rounded-tf-[5px] rounded-br-[15px] rounded-bl-[5px] pt-[10px] pr-[16px] pb-[10px] pl-[16px]  text-BeautyBlack"
            >
              Hire Me
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
