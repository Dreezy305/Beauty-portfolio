import React from "react";
import Image from "next/image";
import {
  UnistaTakeways,
  UplandsMobileGrid,
  UplandsWebGrid,
} from "@/data/experience";

function BottomUplands() {
  return (
    <div className="rounded-tl-none rounded-tr-none rounded-br-[30px] rounded-bl-[30px] py-6 px-7 w-full bg-BeautyDarkPurple flex flex-col space-y-8">
      <h5 className="font-LotaSemiBold font-semibold text-3xl leading-7 pt-12 text-center">
        Brand Overview
      </h5>

      <p className="font-LotaRegular font-normal text-xl leading-8 py-1 pb-8">
        Uplands Hunts is a banking application for internal staffs (Agents &
        Branch Managers) that helps them manage their users.
      </p>

      <div className="rounded-lg px-3 py-12 w-full bg-BeautyDark mx-auto flex flex-row items-center justify-center">
        <h5 className="font-GraphikBold text-4xl leading-7 mx-auto text-center font-bold">
          Case Study Coming Soon
        </h5>
      </div>

      <h5 className="font-LotaSemiBold font-semibold text-3xl leading-7 pt-12 text-center">
        Solution
      </h5>

      <p className="font-LotaRegular font-normal text-xl leading-8 py-1 pb-8 pt-5">
        Unista is a banking application for internal staffs (Agents & Branch
        Managers) that helps them manage their users.
      </p>

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
        <div className="grid grid-cols-2 gap-12 py-4 px-5">
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

      <p className="font-LotaRegular font-normal text-lg leading-8 py-1 pb-4 pt-12">
        The web application design below:
      </p>

      <div className="rounded-lg px-12 bg-BeautyDark py-12 flex flex-col space-y-12">
        <div className="grid grid-cols-2 gap-x-12 gap-y-12">
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
