import React from "react";
import Image from "next/image";
import "./quba.css";

function TopQuba(): JSX.Element {
  return (
    <div className="rounded-tl-[30px] rounded-tr-[30px] rounded-br-none rounded-bl-none py-6 px-7 h-72 w-full bg-BeautyDeepGreen mt-10 quba-image-background">
      <div className="w-1/2 flex flex-col space-y-5 pt-5">
        <Image
          src={"/qubalogo.svg"}
          alt="layer"
          width={100}
          height={24}
          priority
        />
        <div>
          <p className="font-LotaRegular font-normal text-lg leading-8 text-white">
          E-commerce sites in Nigeria are somewhat overwhelming to <br/>navigate as a user. The popular sites are daunting<br/> with information, are less visually appealing and have little to no<br/> update on user experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopQuba;
