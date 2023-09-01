import React from "react";
import Image from "next/image";
import "./fara.css";

function TopFara(): JSX.Element {
  return (
    <div className="rounded-tl-[30px] rounded-tr-[30px] rounded-br-none rounded-bl-none py-6 px-7 h-56 w-full bg-BeautyDeepBlue mt-10 fara-image-background">
      <div className="w-1/2 flex flex-col space-y-5 pt-5">
        <Image
          src={"/faralogo.svg"}
          alt="layer"
          width={100}
          height={24}
          priority
        />
        <div>
          <p className="font-LotaRegular font-normal text-lg leading-8 text-BeautyWhite pb-8">
            The faster & easier way people are able to accesss <br />
            essentials digital services, to better theri quality of life.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopFara;
