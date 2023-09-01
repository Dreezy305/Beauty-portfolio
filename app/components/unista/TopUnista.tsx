import React from "react";
import Image from "next/image";
import "./unista.css";

function TopUnista(): JSX.Element {
  return (
    <div className="rounded-tl-[30px] rounded-tr-[30px] rounded-br-none rounded-bl-none py-6 px-7 h-60 w-full bg-BeautyUnista mt-10 unista-image-background">
      <div className="w-1/2 flex flex-col space-y-5 pt-5">
        <Image
          src={"/unistalogo.svg"}
          alt="layer"
          width={100}
          height={24}
          priority
        />
        <div>
          <p className="font-LotaRegular font-normal text-lg leading-8 text-BeautyWhite">
          Unista is a banking application for internal staffs (Agents & Branch Managers) that helps them manage their users.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopUnista;
