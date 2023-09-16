import React from "react";
import Image from "next/image";
import "./uplands.css";

function TopUplands(): JSX.Element {
  return (
    <>
      <div className="hidden md:block lg:block xl:block rounded-tl-[30px] rounded-tr-[30px] rounded-br-none rounded-bl-none py-6 px-7 h-60 w-full bg-BeautyUplandsCream mt-10 uplands-image-background">
        <div className="w-1/2 flex flex-col space-y-5 pt-5">
          <Image
            src={"/uplandslogo.svg"}
            alt="layer"
            width={100}
            height={24}
            priority
          />
          <div>
            <p className="font-LotaRegular font-normal md:w-[84%] md:text-xs lg:text-lg xl:text-lg md:leading-[16px] lg:leading-8 xl:leading-8 text-BeautyWhite">
              Upland is a banking application for internal staffs (Agents &
              Branch Managers) that helps them manage their users.
            </p>
          </div>
        </div>
      </div>

      <div className="block md:hidden lg:hidden xl:hidden rounded-tl-[30px] rounded-tr-[30px] rounded-br-none rounded-bl-none py-6 px-7 w-full bg-BeautyUplandsCream mt-10">
        <div className="w-full flex flex-col space-y-5 pt-5">
          <Image
            src={"/uplandslogo.svg"}
            alt="layer"
            width={100}
            height={24}
            priority
          />
          <div>
            <p className="font-LotaRegular font-normal text-sm leading-6 text-BeautyWhite w-[102%]">
              Upland is a banking application for internal staffs (Agents &
              Branch Managers) that helps them manage their users.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopUplands;
