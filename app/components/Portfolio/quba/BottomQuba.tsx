import React from "react";
import Image from "next/image";
import { UnistaTakeways } from "@/data/experience";
import QubaOne from "@/public/development/quba1.png";
import QubaTwo from "@/public/development/quba2.png";
import QubaThree from "@/public/development/quba3.png";
import QubaFour from "@/public/development/quba4.png";
import QubaFive from "@/public/development/quba5.png";

function BottomQuba(): JSX.Element {
  return (
    <div className="rounded-tl-none rounded-tr-none rounded-br-[30px] rounded-bl-[30px] py-6 px-7 w-full bg-BeautyDarkPurple flex flex-col space-y-8">
      <h5 className="font-LotaSemiBold font-semibold text-3xl leading-7 pt-12 text-center">
        Brand Overview
      </h5>

      <p className="font-LotaRegular font-normal text-xl leading-8 py-1 pb-8">
        E-commerce sites in Nigeria are somewhat overwhelming to navigate as a
        user. The popular sites are daunting with information, are less visually
        appealing and have little to no update on user experience. While the
        system works, times have changed and this calls for an update on both
        the user interface, visual design and general user experience that also
        aims to ensure the user have a seamless experience and less clickthrough
        rates while shopping.
      </p>

      <div className="rounded-lg px-3 py-12 w-full bg-BeautyDark mx-auto flex flex-row items-center justify-center">
        <h5 className="font-GraphikBold text-4xl leading-7 mx-auto text-center font-bold">
          Case Study Coming Soon
        </h5>
      </div>

      <h5 className="font-LotaSemiBold font-semibold text-3xl leading-7 pt-12 text-center">
        Solution
      </h5>

      <div className="grid grid-cols-3 gap-y-14">
        {UnistaTakeways.map((i) => {
          return (
            <div className="flex flex-row items-center space-x-4" key={i.title}>
              <Image src={i.image} priority alt="" />
              <div className="flex flex-col space-y-2">
                <h5 className="font-LotaRegular font-normal text-base">
                  {i.title}
                </h5>
                {/* <p className="font-LotaRegular font-normal text-sm">{i.desc}</p> */}
              </div>
            </div>
          );
        })}
      </div>

      <p className="font-LotaRegular font-normal text-lg leading-8 py-1 pb-4 pt-12">
        The mobile application design below:
      </p>

      <div className="rounded-lg px-12 bg-BeautyDark py-12 flex flex-col space-y-12">
        <div className="flex flex-row space-x-8 w-full justify-between">
          <Image src={QubaOne} alt="" priority className="w-1/2" />
          <Image src={QubaTwo} alt="" priority className="w-1/2" />
        </div>
        <div className="flex flex-row space-x-8 w-full justify-between">
          <Image src={QubaThree} alt="" priority className="w-1/2" />
          <Image src={QubaFour} alt="" priority className="w-1/2" />
        </div>
        <div className="flex flex-row">
          <Image src={QubaFive} alt="" priority className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default BottomQuba;
