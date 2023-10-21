import React from "react";
import Image from "next/image";
import {
  UnistaTakeways,
  UplandsMobileGrid,
  UplandsWebGrid,
} from "@/data/experience";
import BrandOverview from "../../Brand/BrandOverView";

function BottomUplands() {
  return (
    <div className="rounded-tl-none rounded-tr-none rounded-br-[30px] rounded-bl-[30px] py-6 px-7 w-full bg-BeautyDarkPurple flex flex-col space-y-8">
      {/* <h5 className="font-LotaSemiBold font-semibold text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pt-12 text-center">
        Brand Overview
      </h5> */}
       <BrandOverview />

      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8 py-1 pb-8 pt-4">
        Uplands Hunts is a banking application for internal staffs (Agents &
        Branch Managers) that helps them manage their users.
      </p>

      <div className="rounded-lg px-3 py-5 md:py-12 lg:py-12 xl:py-12 w-full bg-BeautyDark mx-auto flex flex-row items-center justify-center">
        <h5 className="font-GraphikBold text-xl md:text-3xl lg:text-4xl xl:text-4xl leading-7 mx-auto text-center font-bold">
          Case Study Coming Soon
        </h5>
      </div>

      <h5 className="font-LotaSemiBold font-semibold text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pt-12 text-center">
        Solution
      </h5>

      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8 py-1 pb-8 pt-5">
        Uplands is a banking application for internal staffs (Agents & Branch
        Managers) that helps them manage their users.
      </p>

      <div className="grid grid-cols-1 gap-y-8 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-14 lg:grid lg:grid-cols-3 lg:gap-y-14 lg:gap-x-0 xl:grid xl:grid-cols-3 xl:gap-y-14 xl:gap-x-0">
        {UnistaTakeways.map((i) => {
          return (
            <div className="flex flex-row items-center space-x-4" key={i.title}>
              <Image src={i.image} priority alt="" />
              <div className="flex flex-col space-y-2">
                <h5 className="font-LotaRegular font-normal text-base">
                  {i.title}
                </h5>
                
              </div>
            </div>
          );
        })}
      </div>

      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-lg xl:text-lg leading-8 py-1 pb-4 pt-12">
        The mobile application design below:
      </p>

      <div className="rounded-lg px-5 md:px-6 lg:px-12 xl:px-12 bg-BeautyDark py-6 md:py-6 lg:py-12 xl:py-12 flex flex-col space-y-8 md:space-y-8 lg:space-y-12 xl:space-y-12">
        <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-2 md:gap-12 lg:grid lg:grid-cols-2 lg:gap-12 py-2 px-2 md:px-5 md:py-5 lg:py-4 lg:px-5 xl:py-4 xl:px-5">
          <>
            {UplandsMobileGrid.map((i) => {
              return (
                <div key={i.id}>
                  <Image src={i.image} priority alt={i.id} className="w-full" />
                </div>
              );
            })}
          </>
        </div>
      </div>

      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-lg xl:text-lg leading-8 py-1 pb-4 pt-12">
        The web application design below:
      </p>

      <div className="rounded-lg px-5 md:px-6 lg:px-12 xl:px-12 bg-BeautyDark py-6 md:py-6 lg:py-12 xl:py-12 flex flex-col space-y-8 md:space-y-8 lg:space-y-12 xl:space-y-12">
        <div className="grid grid-cols-1 gap-8 md:grid md:grid-cols-2 md:gap-12 lg:grid lg:grid-cols-2 lg:gap-12 py-2 px-2 md:px-5 md:py-5 lg:py-4 lg:px-5 xl:py-4 xl:px-5">
          {UplandsWebGrid.map((i) => {
            return (
              <div key={i.id}>
                <Image src={i.image} priority alt={i.id} className="w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BottomUplands;
