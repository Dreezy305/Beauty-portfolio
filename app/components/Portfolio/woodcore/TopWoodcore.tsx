import React from "react";
import Image from "next/image";
import "./woodcore.css";

function TopWoodcore(): JSX.Element {
  return (
    <>
    <div className="hidden md:hidden lg:block xl:block rounded-tl-[30px] rounded-tr-[30px] rounded-br-none rounded-bl-none py-6 px-7 h-72 w-full bg-white mt-10 woodcore-image-background">
      <div className="w-1/2 flex flex-col space-y-5 pt-5">
        <Image
          src={"/woodcorelogo.svg"}
          alt="layer"
          width={100}
          height={24}
          priority
        />
        <div>
          <p className="font-LotaRegular font-normal text-lg leading-8 text-BeautyDeepBlue">
            WoodCore is a banking application for
            <br /> internal staffs (Agents & Branch Managers) <br /> that helps
            them manage their users.
          </p>
        </div>
      </div>
    </div>

    <div className="block md:block lg:hidden xl:hidden rounded-tl-[30px] rounded-tr-[30px] rounded-br-none rounded-bl-none py-6 px-7  w-full bg-white mt-10">
      <div className="w-full flex flex-col space-y-5 pt-5">
        <Image
          src={"/woodcorelogo.svg"}
          alt="layer"
          width={100}
          height={24}
          priority
        />
        <div>
          <p className="font-LotaRegular font-normal text-sm md:text-base leading-8 text-BeautyDeepBlue w-[102%] md:w-11/12 ">
            WoodCore is a banking application for
           internal staffs (Agents & Branch Managers) that helps
            them manage their users.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default TopWoodcore;
