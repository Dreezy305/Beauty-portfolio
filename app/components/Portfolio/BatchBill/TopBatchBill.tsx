import React from "react";
import Image from "next/image";
import BatchBill from "../../../../public/batchbill.svg"
import "./batchbill.css";

function TopBatchBill(): JSX.Element {
  return (
    <div className="rounded-tl-[30px] rounded-tr-[30px] rounded-br-none rounded-bl-none py-6 px-7 w-full bg-BeautyDeepBlue mt-10 batchbill-image-background batchbill">
      <div className="w-1/2 flex flex-col space-y-5 pt-5 pb-8">
        <Image
          src={BatchBill}
          alt="layer"
          priority
        />
        <div>
          <p className="font-LotaRegular font-normal text-lg leading-8 text-BeautyWhite pb-8">
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
