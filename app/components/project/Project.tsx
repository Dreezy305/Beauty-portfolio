import React from "react";
import Image from "next/image";
import Link from "next/link";
import Image458 from "../../../../public/image458.png";

function Project({navigateTo, title, background, cardBg, image}:{navigateTo: string; title: string; background: string; cardBg: string; image: any}): JSX.Element {
  return (
    <div className={`${background} py-8 px-8 rounded-xl`}>
        <Link
          href={navigateTo}
          className="cursor-pointer underline text-white text-2xl font-normal font-SofiaLight"
        >
          View next project
        </Link>

        <div className="hidden md:flex md:flex-row md:items-end md:justify-between lg:flex lg:flex-row lg:items-end lg:justify-between xl:flex xl:flex-row xl:items-end xl:justify-between">
          <div className="flex flex-col space-y-2 w-1/2 justify-self-end">
            <p className="text-white md:text-[10px] lg:text-xs xl:text-xs font-normal font-SofiaLight">
              USER RESEARCH • UX DESIGN • UI DESIGN • DESIGN SYSTEM
            </p>
            <h5 className="text-white font-normal md:text-5xl lg:text-8xl xl:text-8xl font-SofiaRegular">
              {title}
            </h5>
          </div>
          <div className={`w-1/2 rounded-lg ${cardBg} px-2 py-2`}>
            <Image src={image} alt="group" className="w-full" priority />
          </div>
        </div>

        <div className="pt-6 flex flex-col space-y-5 md:hidden lg:hidden xl:hidden">
          <div className="flex flex-col space-y-5 w-full justify-self-end">
            <p className="text-white text-xs font-normal font-SofiaLight">
              USER RESEARCH • UX DESIGN • UI DESIGN • DESIGN SYSTEM
            </p>
            <h5 className="text-white font-normal text-4xl font-SofiaRegular">
              {title}
            </h5>
          </div>
          <div className={` rounded-lg ${cardBg} px-2 py-2`}>
            <Image src={image} alt="group" className="w-full" priority />
          </div>
        </div>
      </div>
  );
}

export default Project;
