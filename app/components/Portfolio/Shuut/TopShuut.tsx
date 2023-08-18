import React from "react";
import Image from "next/image";
import "./shuut.css";
import Group from "../../../../public/iPhone14Pro.png";

function TopShuut(): JSX.Element {
  return (
    <div className="rounded-tl-[30px] rounded-tr-[30px] rounded-br-none rounded-bl-none py-6 px-7 h-72 w-full bg-BeautyDeepPurple mt-10 flex flex-row shuut-image-background relative">
      <div className="w-1/4 flex flex-col space-y-5 pt-5">
        <Image
          src={"/shuut.svg"}
          alt="layer"
          width={100}
          height={24}
          priority
        />
        <div>
          <p className="font-LotaRegular font-normal text-lg leading-8 text-BeautyWhite">
            SHUUT is a peer-to-peer rental marketplace
            <br />
            which allows people to rent equipments to
            <br />
            others nearby, fully insured.
          </p>
        </div>
      </div>
      <Image src={Group} priority alt="shuut" className="absolute top-0" />
    </div>
  );
}

export default TopShuut;
