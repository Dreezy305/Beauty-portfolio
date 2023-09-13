import React from "react";
import Image from "next/image";
import "./fara.css";

function TopFara(): JSX.Element {
  return (
    <div className="rounded-tl-[30px] rounded-tr-[30px] rounded-br-none rounded-bl-none py-6 px-5 md:px-6 lg:px-7 xl:px-7 h-56 w-full bg-BeautyDeepBlue mt-10 lg:fara-image-background xl:fara-image-background">
      <div className="w-full md:w-4/5 lg:w-1/2 xl:w-1/2 flex flex-col space-y-5 pt-5">
        <Image
          src={"/faralogo.svg"}
          alt="layer"
          width={100}
          height={24}
          priority
        />
        <div>
          <p className="font-LotaRegular font-normal text-sm md:text-base lg:text-lg xl:text-lg leading-6 md:leading-7 lg:leading-8 xl:leading-8 text-BeautyWhite pt-4 md:pt-0 lg:pt-0 xl:pt-0 pb-4 md:pb-4 lg:pb-8 xl:pb-8">
            The faster & easier way people are able to accesss
            essentials digital services, to better theri quality of life.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopFara;
