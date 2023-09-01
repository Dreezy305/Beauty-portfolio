import React from "react";

function BottomUnista() {
  return (
    <div className="rounded-tl-none rounded-tr-none rounded-br-[30px] rounded-bl-[30px] py-6 px-7 w-full bg-BeautyDarkPurple flex flex-col space-y-8">
      <h5 className="font-LotaSemiBold font-semibold text-3xl leading-7 pt-12 text-center">
        Brand Overview
      </h5>

      <p className="font-LotaRegular font-normal text-xl leading-8 py-1 pb-8">
        Unista is a banking application for internal staffs (Agents & Branch
        Managers) that helps them manage their users. over 4,000 agents are
        actively using the platform.
      </p>

      <div className="rounded-lg px-3 py-12 w-full bg-BeautyDark mx-auto flex flex-row items-center justify-center">
        <h5 className="font-GraphikBold text-4xl leading-7 mx-auto text-center font-bold">
          Case Study Coming Soon
        </h5>
      </div>
    </div>
  );
}

export default BottomUnista;
