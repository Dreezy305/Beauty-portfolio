import React from "react";
import Image from "next/image";
import { UnistaTakeways } from "@/data/experience";
import WoodcoreOne from "@/public/development/woodcore1.png";
import WoodcoreTwo from "@/public/development/woodcore2.png";
import WoodcoreThree from "@/public/development/woodcore3.png";
import WoodcoreFour from "@/public/development/woodcore4.png";
import WoodcoreFive from "@/public/development/woodcore5.png";
import WoodcoreSix from "@/public/development/woodcore6.png";
import WoodcoreSeven from "@/public/development/woodcore7.png";
import WoodcoreEight from "@/public/development/woodcore8.png";
import WoodcoreNine from "@/public/development/woodcore9.png";

function BottomWoodcore(): JSX.Element {
  return (
    <div className="rounded-tl-none rounded-tr-none rounded-br-[30px] rounded-bl-[30px] py-6 px-7 w-full bg-BeautyDarkPurple flex flex-col space-y-8">
      <h5 className="font-LotaSemiBold font-semibold text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pt-12 text-center">
        Brand Overview
      </h5>

      <p className="font-LotaRegular font-normal text-base md:text-xl lg:text-xl xl:text-xl leading-8 py-1 pb-8">
        Woodcore is a banking application for internal staffs (Agents & Branch
        Managers) that helps them manage their users.
      </p>

      <div className="rounded-lg px-3 py-5 md:py-12 lg:py-12 xl:py-12 w-full bg-BeautyDark mx-auto flex flex-row items-center justify-center">
        <h5 className="font-GraphikBold text-xl md:text-4xl lg:text-4xl xl:text-4xl leading-7 mx-auto text-center font-bold">
          Case Study Coming Soon
        </h5>
      </div>

      <h5 className="font-LotaSemiBold font-semibold text-xl md:text-2xl lg:text-3xl xl:text-3xl leading-7 pt-12 text-center">
        Solution
      </h5>

      <p className="font-LotaRegular font-normal text-base md:text-lg lg:text-xl xl:text-xl leading-8 py-1 pb-8 pt-5">
        Unista is a banking application for internal staffs (Agents & Branch
        Managers) that helps them manage their users.
      </p>

      <div className="grid grid-cols-1 gap-y-8 md:grid md:grid-cols-3 md:gap-x-12 md:gap-y-14 lg:grid lg:grid-cols-3 lg:gap-y-14 lg:gap-x-0 xl:grid xl:grid-cols-3 xl:gap-y-14 xl:gap-x-0">
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

      <div className="rounded-lg px-4 md:px-12 lg:px-12 xl:px-12 bg-BeautyDark py-4 md:py-12 lg:py-12 xl:py-12 flex flex-col space-y-8 md:space-y-12 lg:space-y-12 xl:space-y-12">
        <div className="flex flex-col space-y-8  md:flex md:flex-row md:space-x-8 md:w-full md:justify-between md:space-y-0 lg:flex lg:flex-row lg:space-x-8 lg:space-y-0 lg:w-full lg:justify-between xl:flex xl:flex-row xl:space-x-8 xl:w-full xl:justify-between xl:space-y-0">
          <Image
            src={WoodcoreOne}
            alt=""
            priority
            className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2"
          />
          <Image
            src={WoodcoreTwo}
            alt=""
            priority
            className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2"
          />
        </div>

        <div className="flex flex-col space-y-8  md:flex md:flex-row md:space-x-8 md:w-full md:justify-between md:space-y-0 lg:flex lg:flex-row lg:space-x-8 lg:space-y-0 lg:w-full lg:justify-between xl:flex xl:flex-row xl:space-x-8 xl:w-full xl:justify-between xl:space-y-0">
          <Image
            src={WoodcoreThree}
            alt=""
            priority
            className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2"
          />
          <Image
            src={WoodcoreFour}
            alt=""
            priority
            className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2"
          />
        </div>

        <div className="flex flex-col space-y-8  md:flex md:flex-row md:space-x-8 md:w-full md:justify-between md:space-y-0 lg:flex lg:flex-row lg:space-x-8 lg:space-y-0 lg:w-full lg:justify-between xl:flex xl:flex-row xl:space-x-8 xl:w-full xl:justify-between xl:space-y-0">
          <Image
            src={WoodcoreFive}
            alt=""
            priority
            className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2"
          />
          <Image
            src={WoodcoreSix}
            alt=""
            priority
            className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2"
          />
        </div>

        <div className="flex flex-col space-y-8  md:flex md:flex-row md:space-x-8 md:w-full md:justify-between md:space-y-0 lg:flex lg:flex-row lg:space-x-8 lg:space-y-0 lg:w-full lg:justify-between xl:flex xl:flex-row xl:space-x-8 xl:w-full xl:justify-between xl:space-y-0">
          <Image
            src={WoodcoreSeven}
            alt=""
            priority
            className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2"
          />
          <Image
            src={WoodcoreEight}
            alt=""
            priority
            className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2"
          />
        </div>

        <div className="flex flex-row">
          <Image src={WoodcoreNine} alt="" priority className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default BottomWoodcore;
