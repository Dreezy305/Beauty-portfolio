import React from "react";
import Image from "next/image";
import "./unista.css";

function TopUnista(): JSX.Element {
  return (
    <>
      <div className="hidden md:block lg:block xl:block rounded-tl-[30px] rounded-tr-[30px] rounded-br-none rounded-bl-none py-6 px-7 h-64 w-full bg-BeautyUnista mt-10 unista-image-background">
        <div className="w-1/2 flex flex-col space-y-3 pt-5">
          <Image
            src={"/unistalogo.svg"}
            alt="layer"
            width={100}
            height={24}
            priority
          />
          <div>
            <p className="font-LotaRegular font-normal md:w-[84%] md:text-xs lg:text-lg xl:text-lg md:leading-[16px] lg:leading-6 xl:leading-8 text-BeautyWhite">
              Unista is a banking application for internal staffs (Agents &
              Branch Managers) that helps them manage their users. over 4,000
              agents are actively using the platform.
            </p>
          </div>
        </div>
      </div>

      <div className="block md:hidden lg:hidden xl:hidden rounded-tl-[30px] rounded-tr-[30px] rounded-br-none rounded-bl-none py-3 px-4 w-full bg-BeautyUnista mt-10">
        <div className="w-full flex flex-col space-y-5 pt-5">
          <Image
            src={"/unistalogo.svg"}
            alt="layer"
            width={100}
            height={24}
            priority
          />
          <div>
            <p className="font-LotaRegular font-normal text-sm leading-6 text-BeautyWhite w-11/12">
              Unista is a banking application for internal staffs (Agents &
              Branch Managers) that helps them manage their users. over 4,000
              agents are actively using the platform.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopUnista;
