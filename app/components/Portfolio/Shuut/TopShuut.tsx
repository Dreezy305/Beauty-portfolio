import React from "react";
import Image from "next/image";
import "./shuut.css";
import Group from "../../../../public/iPhone14Pro.png";

function TopShuut(): JSX.Element {
  return (
    <>
      <div className="rounded-tl-[30px] rounded-tr-[30px] rounded-br-none rounded-bl-none py-6 px-7 h-72 w-full bg-BeautyDeepPurple mt-10 flex flex-row lg:shuut-image-background relative lg:hidden xl:hidden">
        <div className="w-full md:w-4/5 lg:w-1/2 xl:w-1/2 flex flex-col space-y-5 pt-5">
          <Image
            src={"/shuut.svg"}
            alt="layer"
            width={100}
            height={24}
            priority
          />
          <div>
            <p className="font-LotaRegular font-normal text-sm md:text-base lg:text-lg xl:text-lg text-BeautyWhite leading-6 md:leading-7 lg:leading-8 xl:leading-8 pt-4 md:pt-0 lg:pt-0 xl:pt-0 pb-4 md:pb-4 lg:pb-8 xl:pb-8">
              SHUUT is a peer-to-peer rental marketplace which allows people to
              rent equipments to others nearby, fully insured.
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:hidden lg:block xl:block rounded-tl-[30px] rounded-tr-[30px] rounded-br-none rounded-bl-none py-6 px-7 h-72 w-full bg-BeautyDeepPurple mt-10 flex flex-row shuut-image-background relative">
        <div className="w-full md:w-4/5 lg:w-1/2 xl:w-1/2 flex flex-col space-y-5 pt-5">
          <Image
            src={"/shuut.svg"}
            alt="layer"
            width={100}
            height={24}
            priority
          />
          <div>
            <p className="font-LotaRegular font-normal text-sm md:text-base lg:text-lg xl:text-lg text-BeautyWhite leading-6 md:leading-7 lg:leading-8 xl:leading-8 pt-4 md:pt-0 lg:pt-0 xl:pt-0 pb-4 md:pb-4 lg:pb-8 xl:pb-8">
              SHUUT is a peer-to-peer rental marketplace which allows people to
              rent equipments to others nearby, fully insured.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopShuut;
