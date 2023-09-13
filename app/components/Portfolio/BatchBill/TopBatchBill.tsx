import React from "react";
import Image from "next/image";
import BatchBill from "../../../../public/batchbill.svg"
import "./batchbill.css";

function TopBatchBill(): JSX.Element {
  return (
    <div className="rounded-tl-[30px] rounded-tr-[30px] rounded-br-none rounded-bl-none py-6 px-5 md:px-6 lg:px-7 xl:px-7 w-full bg-BeautyDeepBlue mt-10 lg:batchbill-image-background h-72">
      <div className="w-full md:w-4/5 lg:w-1/2 xl:w-1/2 flex flex-col space-y-5 pt-5">
        <Image
          src={BatchBill}
          alt="layer"
          priority
        />
        <div>
          <p className="font-LotaRegular font-normal text-sm md:text-base lg:text-lg xl:text-lg leading-6 md:leading-7 lg:leading-8 xl:leading-8 text-BeautyWhite pt-4 md:pt-0 lg:pt-0 xl:pt-0 pb-4 md:pb-4 lg:pb-8 xl:pb-8">
            Batchbills intends to simplify the process of<br/> paying bills ranging
            from airtime, data, etc &<br/> other bills that can be paid currently in
            Africa.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopBatchBill;
